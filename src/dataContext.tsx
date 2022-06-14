import {createContext} from "react";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

let maxId: number = 100;

function createItem(body: string, condition: string, createDate: any) {
    return {
        isDone: false,
        id: maxId++,
        condition,
        body,
        timestamp: formatDistanceToNow( createDate )
    }
}

const taskData = [
    createItem('Completed task', 'completed', new Date(2022, 5, 7)),
    createItem('Editing task', 'editing', new Date),
    createItem('Active task', 'active',  new Date),
    // {isDone: true, id: 1, condition: 'completed', body: 'Completed task', timestamp: formatDistanceToNow(
    //       new Date(2022, 5, 7)
    //   )},
    // {isDone: false, id: 2, condition: 'editing', body: 'Editing task', timestamp: formatDistanceToNow(
    //       new Date()
    //   )},
    // {isDone: false, id: 3, condition: 'active', body: 'Active task', timestamp: formatDistanceToNow(
    //       new Date()
    //   )}
]

const todoItemContext = createContext(taskData)

// console.log(taskData)
export default todoItemContext