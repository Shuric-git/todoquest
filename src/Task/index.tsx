import {FC} from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = ({body, timestamp}) => {
    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
                <span className="description">{body}</span>
                <span className="created">{timestamp}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}

export {Task}