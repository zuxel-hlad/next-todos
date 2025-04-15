import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

import { ITodo } from '@/types'

export interface ITodoItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    todo: ITodo
    deleteAction: (id: number) => void
    isDoneAction: (id: number) => void
}
