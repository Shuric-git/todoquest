import {FC, useState} from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = (props: ITaskInner) => {
    const {body, timestamp, onDoneTaskList, taskListdeleteTask, id} = props;

    const onDoneHandler = () => {
        onDoneTaskList(id)
    }

    const onDeleteHandler = () => {
        taskListdeleteTask(id)
    }

    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label
            onClick={ onDoneHandler }>
                <span className='description' >{body}</span>
                <span className="created">{timestamp}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"
            onClick={ onDeleteHandler }
            ></button>
        </div>
    )
}

export {Task}