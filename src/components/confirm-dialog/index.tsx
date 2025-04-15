import { JSX } from 'react'

import { cn } from '@/lib/utils'

import { IConfirmDialogProps } from './confirm-dialog.props'

export default function ConfirmDialog({ confirm, cancel, children, className, ...props }: IConfirmDialogProps): JSX.Element {
    return (
        <div className={cn('w-full max-w-140 rounded bg-white p-5', className)} {...props}>
            <h3 className="mb-5 text-center text-3xl font-bold">{children}</h3>
            <div className="flex items-start justify-center gap-4">
                <button
                    type="button"
                    onClick={confirm}
                    className="min-w-23.5 cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white transition outline-none hover:bg-red-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 active:bg-red-700"
                >
                    Confirm
                </button>
                <button
                    type="button"
                    onClick={cancel}
                    className="focus:ring-green-r00 min-w-23.5 cursor-pointer rounded-md bg-green-500 px-4 py-2 text-white transition outline-none hover:bg-green-600 focus:border-green-500 focus:ring-1 active:bg-green-700"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
