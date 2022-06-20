import React, { FC } from "react";

const TasksFilter: FC<{filterActive: () => void}> = ({filterActive}) => {
    return (
        <ul className="filters">
            <li>
                <button className="selected">All</button>
            </li>
            <li>
                <button
                onClick={filterActive}
                >Active</button>
            </li>
            <li>
                <button>Completed</button>
            </li>
        </ul>
    )
}

export {TasksFilter}