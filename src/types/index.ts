export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
    pending?: boolean
    pendingMessage?: string
}
