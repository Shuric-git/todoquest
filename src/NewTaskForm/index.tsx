import { FC } from "react";

import './NewTaskForm.css'

const NewTaskForm: FC = () => {
    return (
        <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
    )
}

export {NewTaskForm}