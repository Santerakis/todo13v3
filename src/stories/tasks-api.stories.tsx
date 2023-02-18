import React, {useEffect, useState} from "react";
import {taskApi} from "../api/task-api";


export default {
    title: 'API-Tasks'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '0b46b098-09bd-4242-a898-96ea25073d75'
        taskApi.getTasks(todoId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '0b46b098-09bd-4242-a898-96ea25073d75'
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
        const todoId = '0b46b098-09bd-4242-a898-96ea25073d75'
        const taskId = '3c2c1701-b937-4c49-aa93-a2d7f9dcf345'
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
        const todoId = '0b46b098-09bd-4242-a898-96ea25073d75'
        const taskId = '3c2c1701-b937-4c49-aa93-a2d7f9dcf345'
        taskApi.deleteTask(todoId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}