import React, { FC } from "react";

import './NewTaskForm.css'

const NewTaskForm: FC = () => {
    return (
        <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
    )
}

const AddItemBtn = (props: {itemAddhandler: (text: string) => void}) => {

    const {itemAddhandler} = props

    return(
        <div className="add-Item__Form">
            <button className="add--item__btn"
                onClick = { () => itemAddhandler('Yay') }
            >Add</button>
        </div>
    )
}

export {NewTaskForm, AddItemBtn}