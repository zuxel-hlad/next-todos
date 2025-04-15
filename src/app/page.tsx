import { JSX } from 'react'

import TodoList from '@/components/todo-list'
import { BASE_TODOS_LIMIT, BASE_URL } from '@/constants'
import { ITodo } from '@/types'

export default async function Home(): Promise<JSX.Element> {
    try {
        const res = await fetch(`${BASE_URL}/todos?_limit=${BASE_TODOS_LIMIT}`, {
            cache: 'force-cache',
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch todos with status: ${res.status}`)
        }

        const todos = (await res.json()) as ITodo[]

        return (
            <div className="bg-red container mx-auto px-3">
                <TodoList todos={todos} />
            </div>
        )
    } catch (error) {
        const message = error instanceof Error ? error.message : JSON.stringify(error)
        console.error(message)
        return (
            <div className="bg-red container mx-auto px-3">
                <TodoList todos={[]} />
            </div>
        )
    }
}
