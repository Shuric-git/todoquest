import React, { FC } from "react";

const NewTaskForm: FC = () => {
    return (
        <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
    )
}

export {NewTaskForm}