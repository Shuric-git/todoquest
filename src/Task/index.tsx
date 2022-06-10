import {FC, useState} from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = (props) => {
    const {body, timestamp, onDone, deleteTask, id} = props;
    const [done, setDone] = useState(false)

    const onDoneHandler = () => {
        setDone(!done)
        if(onDone) onDone(id)
    }


    // console.log(onDeleted)
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
            onClick={ deleteTask }
            ></button>
        </div>
    )
}

export {Task}