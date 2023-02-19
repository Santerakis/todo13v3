import React, {useEffect, useState} from 'react'
import {todoListApi} from "../api/todolist-api";

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
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        todoListApi.getTodolists()
            .then((res) => {
                const result = res.data
                setState(result)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoName = 'REACT&Redux'
        // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: todoName}, settings)
            todoListApi.createTodolist(todoName)
                .then((res) => {
                    setState(res.data)
                })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '0b46b098-09bd-4242-a898-96ea25073d75'
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings)
        todoListApi.deleteTodolist(todoId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '5e9fda75-294a-401d-a5b3-d85b78b04477'
        const todoName = 'REACT&JSkeeewww'
        // const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: todoName}, settings)
        todoListApi.updateTodoList(todoId, todoName)
            .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

