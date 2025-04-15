import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

import { ITodo } from '@/types'
export interface ICreateTodoFormProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    onCreate?: (todo: ITodo) => void
}
