import React, {useEffect, useState} from "react";
import {taskApi, TaskType} from "../api/task-api";


export default {
    title: 'API-Tasks'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    // const [title, setTitle] = useState<string>('')

    useEffect(() => {
        const todoId = '5e9fda75-294a-401d-a5b3-d85b78b04477'
        taskApi.getTasks(todoId)
            .then((res) => {
                setState(res)
                // setTitle(res.data.items[0].title)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '5e9fda75-294a-401d-a5b3-d85b78b04477'
        const title = 'New task name'
        taskApi.createTask(todoId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '5e9fda75-294a-401d-a5b3-d85b78b04477'
        const taskId = 'e046d71c-47aa-45d3-90a1-5e4c5dd504e9'
        const title = 'Update task name'
        taskApi.updateTask(todoId, taskId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '5e9fda75-294a-401d-a5b3-d85b78b04477'
        const taskId = 'aa7a68f4-5b16-4ac2-ad71-cb66bc9d6867'
        taskApi.deleteTask(todoId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}