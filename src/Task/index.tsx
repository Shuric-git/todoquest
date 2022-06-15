import {FC, useState} from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = (props: ITaskInner) => {

    const { body, timestamp, onDoneTaskList, taskListdeleteTask } = props;

    return (
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label
            onClick = { onDoneTaskList }>
                <span className='description' >{body}</span>
                <span className="created">{timestamp}</span>
            </label>
            <button className="icon icon-edit" />
            <button className="icon icon-destroy"
            onClick = { taskListdeleteTask }
             />
        </div>
    )
}

Task.defaultProps ={
    onDoneTaskList: () => {},
    taskListdeleteTask: () => {}
}

export {Task}