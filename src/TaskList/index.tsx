import { FC } from "react";

import {Task} from '../router'

import {ITask} from "../interafces";

import './TaskList.css'

const TaskList: FC<{tasks: Array<ITask>}> = ({tasks}) => {

    const elements = tasks.map((item) => {

        const {id, state, ...itemProps} = item;
        if (state === 'editing') {
            return (
                <li key={id} className={state}>
                    <Task {...itemProps}/>
                    <input type="text" className="edit" value="Editing task"></input>
                </li>
            )
        } else {
            return (
                <li key={id} className={state}>
                    <Task {...itemProps}/>
                </li>
            )
        }

    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export {TaskList}