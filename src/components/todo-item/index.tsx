import { JSX } from 'react'

import { cn } from '@/lib/utils'

import { ITodoItemProps } from './todo-item.props'

export default function TodoItem({ todo, deleteAction, isDoneAction, className, ...props }: ITodoItemProps): JSX.Element {
    const { title, id, pending, pendingMessage, completed } = todo

    return (
        <div className={cn('group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md', className)} {...props}>
            <div className="flex items-center justify-between gap-2.5">
                <p className={cn('text-base font-medium text-gray-900', completed && 'text-gray-400 line-through')}>{title ?? '-'}</p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => deleteAction(id)}
                        type="button"
                        className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 active:scale-95"
                    >
                        Delete
                    </button>
                    <label className="flex cursor-pointer items-center gap-2">
                        <input type="checkbox" className="h-5 w-5 accent-green-500" onChange={() => isDoneAction(id)} checked={completed} />
                    </label>
                </div>
            </div>

            {pending && <small className="absolute bottom-0.25 left-5 mt-2 inline-block animate-pulse text-xs text-gray-500">{pendingMessage ?? 'Action in progress...'}</small>}
        </div>
    )
}
