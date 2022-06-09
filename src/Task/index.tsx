import {FC, useState, Component} from "react";

import { ITaskInner } from "../interafces";

import './Task.css';

const Task: FC<ITaskInner> = ({body, timestamp}, onDone) => {



    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label
            >
                <span className='description' >{body}</span>
                <span className="created">{timestamp}</span>
            </label>
            <button className="icon icon-edit" onClick={onDone}></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}

export {Task}