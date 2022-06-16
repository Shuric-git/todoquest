import {FC, useState} from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = (props: ITaskInner) => {

    const { isDone, body, timestamp, onDoneTaskList, taskListdeleteTask } = props;

    const [checked, setChecked] = useState(isDone)

    return (
        <div className="view">
            <input className="toggle" type="checkbox"
            defaultChecked={ isDone }
            onClick={ () => {
                console.log(checked)
                setChecked(!checked)
            } }/>
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