import axios from "axios";

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
    updateTodoList(todoId: string, title: string) {
        const promise = instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
        return promise
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: Todolists}>>('todo-lists', {title})
            .then((res) => res)
    },
    deleteTodolist(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    },
    getTodolists() {
        return instance.get<Todolists[]>('todo-lists')
    },
}

// то что возращает каждый эндпойнт. Когда промис резолвится

type Todolists = {
    id: string
    title: string
    addedDate: string
    order: number         
}

// дефолтное состояние, по аналогии с функцией
type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]   //Array<string>
    data: T
}

// //придумать общее название
// type UpdateTodoListTypeAndDelete = {
//     resultCode: number
//     messages: string[]
//     data: {}
//     // fieldsErrors: []                 // если поле всегда приходит пустое его можно не писывать
//     fieldsErrors?: []                   // или так
// }

