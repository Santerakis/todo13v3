import axios from "axios";


const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    },
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings  //выбираем элементы
})

export const taskApi = {
    getTasks(todoId: string) {
        return instance.get<TasksGetResponseType<TaskType>>(`/todo-lists/${todoId}/tasks`)
    },
    createTask(todoId: string, title: string) {
        return instance.post<TaskResponseType<{item: TaskType}>>(`/todo-lists/${todoId}/tasks`, {title})
    },
    updateTask(todoId: string, taskId: string, model: UpdateTaskModelType) {
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
    startDate: Date  //димыч писал string
    deadline: Date
    id: string
    todoListId: string
    order: number
    addedDate: Date
}

export type TasksGetResponseType<T = {}> = {
    error: string | null  //нас определили по ответуб ане докуметация
    items: T[]   //димыч items :TaskType[]
    totalCount: number
}

type TaskResponseType<T = {}>  = {  //можно проэкспортировать из todo
    data: T
    resultCode: number
    messages: string[]
}

type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}
