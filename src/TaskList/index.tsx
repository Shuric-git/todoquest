import { FC, useState } from "react";

import {Task} from '../router'

import {ITask} from "../interafces";

import './TaskList.css'

const TaskList: FC<{tasks: Array<ITask>}> = ({tasks}) => {

    // const [condition, setCondition] = useState('active')
    // const [color, setColor] = useState('black')

    const [done, setDone] = useState(false)


    // if (done) {
    //     classNames += ' done'
    // }

    const elements = tasks.map((item) => {

        let {id, condition, ...itemProps} = item;

        if (condition !== 'editing') {
            condition = done ? 'completed' : 'active'
        }

        if (condition === 'editing') {
            return (
                <li key={id} className={condition}>
                    <Task {...itemProps}/>
                    <input type="text" className="edit" value="Editing task"></input>
                </li>
            )
        } else {
            return (
                <li key={id} className={condition}
                    // onClick={ (e) =>
                    //     console.log(e.target)}
                >
                    <Task {...itemProps}
                    onDone={() => console.log('completed')}/>
                </li>
            )
        }

    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export {TaskList}