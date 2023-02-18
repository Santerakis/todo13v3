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
        return instance.get(`/todo-lists/${todoId}/tasks`)
    },
    createTask(todoId: string, title: string) {
        return instance.post(`/todo-lists/${todoId}/tasks`, {title})
    },
    updateTask(todoId: string, taskId: string, title: string) {
        return instance.put(`/todo-lists/${todoId}/tasks/${taskId}`, {title})
    },
    deleteTask(todoId: string, taskId: string) {
        return instance.delete(`/todo-lists/${todoId}/tasks/${taskId}`)
    },
}