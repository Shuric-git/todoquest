import React, { FC } from "react";

const TasksFilter: FC = () => {
    return (
        <ul className="filters">
            <li>
                <button className="selected">All</button>
            </li>
            <li>
                <button>Active</button>
            </li>
            <li>
                <button>Completed</button>
            </li>
        </ul>
    )
}

export {TasksFilter}