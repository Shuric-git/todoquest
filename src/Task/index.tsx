import { FC } from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = (props) => {

    const {body, timestamp, onDone} = props;
    // console.log(onDeleted)
    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label
            onClick={ onDone }>
                <span className='description' >{body}</span>
                <span className="created">{timestamp}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"
            // onClick={ onDeleted }
            ></button>
        </div>
    )
}

export {Task}