import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

import { ITodo } from '@/types'

export interface ITodoListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    todos: ITodo[]
}
