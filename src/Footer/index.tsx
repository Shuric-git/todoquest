import { FC } from "react";

import {TasksFilter} from "../TasksFilter";

import './Footer.css';

const Footer: FC<{isDoneCounter: number, filterActive: () => void}> = ({isDoneCounter, filterActive}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{isDoneCounter} items left</span>
            <TasksFilter
                filterActive={ filterActive }
            />
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export {Footer}