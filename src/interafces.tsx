interface ITask {
    id: number,
    body: string,
    condition: string,
    timestamp: string,
    isDone: boolean,
    // onDoneHandler: () => void
}

interface ITaskInner {
    id: number,
    body: string, 
    timestamp: string,
    onDoneTaskList: () => void,
    taskListdeleteTask: ()=> void
}

export type {
    ITask,
    ITaskInner
}