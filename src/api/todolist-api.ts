import axios from "axios";
import {CreateTodolist, DeleteTodolist, GetTodolists} from "../stories/todolists-api.stories";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '41a57b15-e11f-44c8-97d0-06e777d3aac1'   // 403 не прав доступа
    }
}

export const todoListApi = {
    updateTodoList(id: string, title: string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title}, settings)
        return promise
    },
    getTodolists() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
    createTodolist(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
    },
    deleteTodolist(todoId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings)
    }
}