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
                setState(res.data)
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
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        taskApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
    <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
        <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
        <button onClick={deleteTask}>delete task</button>
    </div>
    </div>
}