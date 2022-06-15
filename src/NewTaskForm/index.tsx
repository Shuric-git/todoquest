import React, { FC, KeyboardEvent } from "react";

import './NewTaskForm.css'

const NewTaskForm: FC<{ appSubmitTask: (text: string) => void }> = (props) => {

    const {appSubmitTask} = props

    const submitTask: (e: KeyboardEvent<HTMLInputElement>) => void = (e) => {
        if ( e.key === 'Enter' || e.key === 'NumpadEnter') {
            console.log(e.target)
            const eTarget = e.target
            const valueStr = eTarget.value
            appSubmitTask(valueStr);
        }
    }

    return (
        <input className="new-todo"
               placeholder="What needs to be done?"
               autoFocus
            onKeyDown={ (e) => submitTask(e) }
        ></input>
    )
}



// const AddItemBtn = (props: {itemAddhandler: () => void}) => {
//
//     const {itemAddhandler} = props
//
//     return(
//         <div className="add-Item__Form">
//             <button className="add--item__btn"
//                 onClick = { () => itemAddhandler('Yay') }
//             >Add</button>
//         </div>
//     )
// }
//
// AddItemBtn.defaultProps = {
//     itemAddhandler: () => {}
// }

export {NewTaskForm}