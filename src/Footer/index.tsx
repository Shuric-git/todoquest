import React, { FC } from "react";

import {TasksFilter} from "../TasksFilter";

import '../index.css';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TasksFilter />
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export {Footer}