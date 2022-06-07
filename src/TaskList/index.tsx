import React, { FC } from "react";

import {Task} from '../router'

import {ITask} from "../interafces";

const TaskList: FC<{tasks: Array<ITask>}> = ({tasks}) => {
    return (
        <ul className="todo-list">
            <li className="completed">
                <Task />
            </li>
            <li className="editing">
                {/*<div className="view">*/}
                {/*    <input className="toggle" type="checkbox"></input>*/}
                {/*    <label>*/}
                {/*        <span className="description">Editing task</span>*/}
                {/*        <span className="created">created 5 minutes ago</span>*/}
                {/*    </label>*/}
                {/*    <button className="icon icon-edit"></button>*/}
                {/*    <button className="icon icon-destroy"></button>*/}
                {/*</div>*/}
                <input type="text" className="edit" value="Editing task"></input>
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox"></input>
                    <label>
                        <span className="description">Active task</span>
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
        </ul>
    )
}

export {TaskList}