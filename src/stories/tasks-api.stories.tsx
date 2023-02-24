import React, {useEffect, useState} from "react";
import {taskApi, TaskType} from "../api/task-api";


export default {
    title: 'API-Tasks'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")

    const getTasks = () => {
        taskApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId}
                   onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <button onClick={getTasks}>get tasks</button>
        </div>
    </div>
}
// export const CreateTask = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         const todoId = '5e9fda75-294a-401d-a5b3-d85b78b04477'
//         const title = 'New task name'
//         taskApi.createTask(todoId, title)
//             .then((res) => {
//                 setState(res.data)
//             })
//     }, [])
//
//     return <div>{JSON.stringify(state)}</div>
// }
// export const UpdateTask = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         const todoId = '6499ab60-b4ed-414c-b992-3499f39d97b4'
//         const taskId = 'edd6f585-b9fd-4e95-af8d-415f9001f566'
//         const title = 'Update task name'
//         taskApi.updateTask(todoId, taskId, title)
//             .then((res) => {
//                 setState(res.data)
//             })
//     }, [])
//
//     return <div>{JSON.stringify(state)}</div>
// }
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
            <input placeholder={'todolistId'} value={todolistId}
                   onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
        taskApi.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId}
                   onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'Task Title'} value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
            <button onClick={createTask}>create task</button>
        </div>
    </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("title ...")
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")
    const [taskDescription, setTaskDescription] = useState<string>("description 1")
    const [taskStatus, setTaskStatus] = useState<number>(1000)
    const [taskPriority, setTaskPriority] = useState<number>(1000)
    const [taskStartDate, setTaskStartDate] = useState<string>("")
    const [taskDeadline, setTaskDeadline] = useState<string>("")


    const updateTask = () => {
        taskApi.updateTask(todolistId, taskId, {
            deadline: "",
            description: taskDescription,
            priority: taskPriority,
            // startDate: "",
            status: taskStatus,
            title: taskTitle
        })
            .then((res) => {
                setState(res.data)
            })
    }


    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'taskTitle'} value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'taskDescription'} value={taskDescription} onChange={(e) => setTaskDescription(e.currentTarget.value)}/>
            <input placeholder={'taskStatus'} type="number" value={taskStatus} onChange={(e) => setTaskStatus(+e.currentTarget.value)}/>
            <input placeholder={'taskPriority'} type="number" value={taskPriority} onChange={(e) => setTaskPriority(+e.currentTarget.value)}/>
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
}