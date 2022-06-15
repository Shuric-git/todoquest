import { FC, useState } from "react";

import {Task} from '../router'

import {ITask} from "../interafces";

import './TaskList.css'

const TaskList: FC<{ tasks: Array<ITask>, appDeleteTask: (id: number) => void, onDoneApp: (id: number) => void }> = (props) => {

    const editorial = <input type="text" className="edit" placeholder="Editing task" />

    const { tasks, onDoneApp, appDeleteTask } = props

    const elements = tasks.map((item: ITask) => {

        let { id, isDone, condition, ...itemProps } = item;

        condition === 'editing' ? condition = 'editing' : isDone ? condition = 'completed' : condition = 'active'

            return (
                <li key = { id } className = { condition }>
                    <Task { ...itemProps }
                    id = { id }
                    onDoneTaskList = { () => onDoneApp(id) }
                    taskListdeleteTask = { () => appDeleteTask(id) }
                    />
                    { condition === 'editing' ? editorial : '' }
                </li>
            )
    })
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    )
}

TaskList.defaultProps = {
    appDeleteTask: () => {},
    onDoneApp: () => {}
}
// function dtl(id: number) {
//     return function odtl(id: number) {
//         return function deleteT(id: number) {
//             'delete task'
//         }
//     }
// }
export { TaskList }