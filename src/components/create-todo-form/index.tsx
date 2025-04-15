import { JSX } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { ITodo } from '@/types'

import { ICreateTodoFormProps } from './create-todo-form.props'

interface Inputs {
    title: string
    completed: boolean
}

export default function CreateTodoForm({ onCreate, className, ...props }: ICreateTodoFormProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = ({ completed, title }) => {
        if (!onCreate) {
            return
        }
        onCreate({ userId: Math.floor(Math.random() * 2001), id: Math.floor(Math.random() * 2001), title, completed } as ITodo)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={cn('w-full space-y-4 rounded-2xl bg-white p-6 shadow-xl transition-all', className)} {...props}>
                <div className="relative">
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        placeholder="Enter todo text"
                        className={cn(
                            'peer w-full rounded-md border border-gray-300 px-4 pt-6 pb-2 text-base text-gray-900 placeholder-transparent transition-all outline-none focus:border-green-500 focus:ring-1 focus:ring-green-400',
                            errors.title && 'border-red-500 focus:border-red-500 focus:ring-red-300',
                        )}
                    />
                    <label className="pointer-events-none absolute top-2 left-4 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                        Todo Title
                    </label>
                    {errors.title && <p className="mt-1 text-sm text-red-500">Enter todo text!</p>}
                </div>

                <div className="flex flex-col items-start justify-start">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                            {...register('completed')}
                            type="checkbox"
                            className="h-4 w-4 accent-green-500 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-400"
                        />
                        <span>Completed</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="focus:ring-green-r00 w-full cursor-pointer rounded-md bg-green-500 px-4 py-2 text-white transition outline-none hover:bg-green-600 focus:border-green-500 focus:ring-1 active:bg-green-700"
                >
                    Add Todo
                </button>
            </form>
        </>
    )
}
