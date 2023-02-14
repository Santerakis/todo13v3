import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '41a57b15-e11f-44c8-97d0-06e777d3aac1'   // 403 не прав доступа
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoName = 'REACT&Redux'
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: todoName}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'ce49fdcd-28d9-44f9-b42e-7f5fdd017d20'
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = 'a9ec1b66-2a02-438c-8f2a-4f6bce20be19'
        const todoName = 'REACT&JSs'
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: todoName}, settings)
        promise.then((res) => {
            debugger
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

