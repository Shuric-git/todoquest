import {FC, useState} from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = (props: ITaskInner) => {

    const { isDone, body, timestamp, onDoneTaskList, taskListdeleteTask } = props;

    const [checked, setChecked] = useState<boolean>(isDone)

    const onClickHandler = () => {
        onDoneTaskList();
        setChecked(!checked)
    }

    return (
        <div className="view">
            <input className="toggle" type="checkbox"
            checked={ checked }
            onChange = {
                onClickHandler
            }
            />
            <label
            onClick = {
                onClickHandler
            }>
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