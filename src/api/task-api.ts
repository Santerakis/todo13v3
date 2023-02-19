import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    },
})

export const taskApi = {
    getTasks(todoId: string) {
        return instance.get<TaskGetResponseType<TaskType>>(`/todo-lists/${todoId}/tasks`)
    },
    createTask(todoId: string, title: string) {
        return instance.post<TaskResponseType<{item: TaskType}>>(`/todo-lists/${todoId}/tasks`, {title})
    },
    updateTask(todoId: string, taskId: string, title: string) {
        return instance.put<TaskResponseType<{item: TaskType}>>(`/todo-lists/${todoId}/tasks/${taskId}`, {title})
    },
    deleteTask(todoId: string, taskId: string) {
        return instance.delete<TaskResponseType>(`/todo-lists/${todoId}/tasks/${taskId}`)
    },
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
    id: string
    todoListId: string
    order: number
    addedDate: Date
}

export type TaskGetResponseType<T = {}> = {
    error: string
    items: T[]
    totalCount: number
}

type TaskResponseType<T = {}>  = {
    data: T
    resultCode: number
}