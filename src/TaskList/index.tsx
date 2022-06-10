import { FC, useState } from "react";

import {Task} from '../router'

import {ITask} from "../interafces";

import './TaskList.css'

const TaskList: FC<{tasks: Array<ITask>}> = ({tasks}) => {

    const [done, setDone] = useState(false)

    const onDoneHandler = () => {
        setDone((done) => !done)
    }

    const elements = tasks.map((item) => {

        let {id, condition, onDeleted, ...itemProps} = item;

        if (condition !== 'editing') {
            condition = done ? 'completed' : 'active'
        }

        if (condition === 'editing') {
            return (
                <li key={id} className={condition}>
                    <Task {...itemProps}/>
                    <input type="text" className="edit" value="Editing task"></input>
                </li>
            )
        } else {
            return (
                <li key={id} className={condition}>
                    <Task {...itemProps}
                    onDone={ onDoneHandler }
                    onDeleted={() => console.log('deleted')}/>
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