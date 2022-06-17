import { FC } from "react";

import {TasksFilter} from "../TasksFilter";

import './Footer.css';

const Footer: FC<{doneCounter: number, filter: string, onFilterChange: (filter: string)=> void}> = ({doneCounter, filter, onFilterChange}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{doneCounter} items left</span>
            <TasksFilter
            filter={filter}
            onFilterChange={onFilterChange}/>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export {Footer}