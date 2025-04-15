import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, BASE_TODOS_LIMIT } from '@/constants/index'
import { ITodo } from '@/types'

const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),

    endpoints: (builder) => ({
        getTodos: builder.query<ITodo[], null>({
            query: () => `/todos?&_limit=${BASE_TODOS_LIMIT}`,
        }),

        addTodo: builder.mutation<ITodo, ITodo>({
            query: (body) => ({
                url: '/todos',
                method: 'POST',
                body,
            }),
        }),

        deleteTodo: builder.mutation<object, number>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
        }),

        updateTodoIsDone: builder.mutation<ITodo, { completed: boolean; id: number }>({
            query: ({ completed, id }) => ({
                url: `/todos/${id}`,
                method: 'PATCH',
                body: { completed },
            }),
        }),
    }),
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoIsDoneMutation } = todosApi

export default todosApi
