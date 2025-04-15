'use client'

import { JSX, startTransition, useEffect, useOptimistic } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import TodoItem from '@/components/todo-item'
import { Spinner } from '@/components/UI'
import { useAppDispatch } from '@/lib/hooks'
import todosApi, { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoIsDoneMutation } from '@/lib/store/api/todos-api'
import { cn } from '@/lib/utils'
import { ITodo } from '@/types'

import CreateTodoForm from '../create-todo-form'

import { ITodoListProps } from './todo-list.props'

export default function TodoList({ todos: initialTodos, className, ...props }: ITodoListProps): JSX.Element {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(todosApi.util.upsertQueryData('getTodos', null, initialTodos))
    }, [dispatch, initialTodos])

    const { data: todos, isLoading: isTodosLoading } = useGetTodosQuery(null)
    const [addTodo] = useAddTodoMutation()
    const [deleteTodo] = useDeleteTodoMutation()
    const [updateTodoIsDone] = useUpdateTodoIsDoneMutation()

    const [optimisticTodos, setOptimisticTodos] = useOptimistic<ITodo[], (prev: ITodo[]) => ITodo[]>(todos ?? [], (prevTodos, updater) => updater(prevTodos))

    const updateOptimistic = (id: number, updater: (todo: ITodo) => ITodo) => {
        startTransition(() => {
            setOptimisticTodos((prev) => prev.map((todo) => (todo.id === id ? updater(todo) : todo)))
        })
    }

    const handleTodoAction = async ({
        id,
        fallbackMessage,
        optimisticUpdater,
        serverEffect,
        successMessage,
    }: {
        id: number
        fallbackMessage: string
        optimisticUpdater: (todo: ITodo) => ITodo
        serverEffect: () => Promise<void>
        successMessage: string
    }) => {
        const targetTodo = optimisticTodos.find((todo) => todo.id === id)
        if (!targetTodo) {
            toast(fallbackMessage, { type: 'error' })
            return
        }

        updateOptimistic(id, optimisticUpdater)

        try {
            await serverEffect()
            toast(successMessage, { type: 'success' })
        } catch {
            toast(fallbackMessage, { type: 'error' })
        }
    }

    const handleNewTodoAction = async ({
        optimisticTodo,
        serverEffect,
        successMessage,
        fallbackMessage,
    }: {
        optimisticTodo: ITodo
        serverEffect: () => Promise<void>
        successMessage: string
        fallbackMessage: string
    }) => {
        if (!optimisticTodo) {
            toast(fallbackMessage, { type: 'error' })
            return
        }

        startTransition(() => setOptimisticTodos((prev) => [{ ...optimisticTodo, pending: true, pendingMessage: '(Adding...)' }, ...prev]))

        try {
            await serverEffect()
            toast(successMessage, { type: 'success' })
        } catch {
            toast(fallbackMessage, { type: 'error' })
        }
    }

    const onAddNewTodo = async (todo: ITodo): Promise<void> => {
        await handleNewTodoAction({
            optimisticTodo: todo,
            fallbackMessage: 'Adding failed. Try again.',
            successMessage: 'New todo successfully added!',
            serverEffect: async () => {
                const result = await addTodo(todo).unwrap()
                dispatch(
                    todosApi.util.updateQueryData('getTodos', null, (draft) => {
                        draft.unshift(result)
                    }),
                )
            },
        })
    }

    const onDeleteTodo = async (id: number) => {
        await handleTodoAction({
            id,
            fallbackMessage: 'Deletion todo error.',
            optimisticUpdater: (todo) => ({ ...todo, pending: true, pendingMessage: '(Deleting...)' }),
            serverEffect: async () => {
                await deleteTodo(id)
                dispatch(todosApi.util.updateQueryData('getTodos', null, (draft) => draft.filter((todo) => todo.id !== id)))
            },
            successMessage: 'Todo successfully deleted!',
        })
    }

    const onUpdateTodoIsDone = async (id: number) => {
        await handleTodoAction({
            id,
            fallbackMessage: 'Update failed. Try again.',
            optimisticUpdater: (todo) => ({
                ...todo,
                completed: !todo.completed,
                pending: true,
                pendingMessage: '(Updating...)',
            }),
            serverEffect: async () => {
                const result = await updateTodoIsDone({
                    id,
                    completed: !optimisticTodos.find((t) => t.id === id)?.completed,
                }).unwrap()

                dispatch(todosApi.util.updateQueryData('getTodos', null, (draft) => draft.map((todo) => (todo.id === id ? { ...todo, completed: result.completed } : todo))))
            },
            successMessage: 'Todo updated!',
        })
    }

    return (
        <>
            <div className={cn('mt-14 mb-5 flex flex-col gap-1', className)} {...props}>
                <CreateTodoForm className="mb-10" onCreate={onAddNewTodo} />
                {optimisticTodos.map((todo) => (
                    <TodoItem key={crypto.randomUUID()} todo={todo} deleteAction={onDeleteTodo} isDoneAction={onUpdateTodoIsDone} />
                ))}
                {!isTodosLoading && !optimisticTodos.length && <p className="text-center">No todos yet.</p>}
            </div>
            {isTodosLoading && <Spinner className="mx-auto" />}
            <ToastContainer />
        </>
    )
}
