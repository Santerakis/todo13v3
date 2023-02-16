import axios from "axios";
import {CreateTodolist, DeleteTodolist, GetTodolists} from "../stories/todolists-api.stories";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '41a57b15-e11f-44c8-97d0-06e777d3aac1'   // 403 не прав доступа
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    },
})

export const todoListApi = {
    updateTodoList(id: string, title: string) {
        const promise = instance.put(`todo-lists/${id}`, {title})
        return promise
    },
    createTodolist(title: string) {
        return instance.post('todo-lists', {title})
            .then((res) => res.data)
    },
    deleteTodolist(todoId: string) {
        return instance.delete(`todo-lists/${todoId}`)
    },
    getTodolists() {
        return instance.get('todo-lists')
    },
}