import React, { FC, KeyboardEvent, useState } from "react";

import './NewTaskForm.css'
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const NewTaskForm: FC<{ appSubmitTask: (text: string, condition: string, timestamp: Date) => void }> = (props) => {

    const {appSubmitTask} = props

    function createItem(body: string, condition: string = 'active', createDate: Date) {

        return {
            isDone: false,
            id: Date.now(),
            condition,
            body,
            timestamp: formatDistanceToNow( createDate )
        }
    };

    const [input, setInput] = useState('')

    const submitTask: (e: KeyboardEvent<HTMLInputElement>) => void = (e) => {
        if ( e.key === 'Enter' || e.key === 'NumpadEnter') {
            appSubmitTask(input, 'active', new Date())
        }
    }

    return (
        <input className="new-todo"
               placeholder="What needs to be done?"
               autoFocus
               onChange={ e => setInput(e.target.value) }
            onKeyDown={ (e) => submitTask(e) }
         />
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