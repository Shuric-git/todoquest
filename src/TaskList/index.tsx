import { FC, useState } from "react";

import {Task} from '../router'

import {ITask} from "../interafces";

import './TaskList.css'

const TaskList: FC<{tasks: Array<ITask>, onDeleted: (id: number)=> void, onDoneHandler: (id: number)=> void}> = (props) => {
    const {tasks, onDoneHandler, onDeleted} = props

    const elements = tasks.map((item) => {

        let {id, condition, ...itemProps} = item;

        // if (condition === 'editing') {
        //     return (
        //         <li key={id} className={condition}>
        //             <Task {...itemProps}/>
        //             <input type="text" className="edit" value="Editing task"></input>
        //         </li>
        //     )
        // } else {
            return (
                <li key={id} className={condition}>
                    <Task {...itemProps}
                        id={id}
                    onDone={ onDoneHandler }
                    deleteTask={() => onDeleted}
                    />
                    {condition === 'editing' ? <input type="text" className="edit" value="Editing task"></input> : ''}
                </li>
            )
    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export {TaskList}