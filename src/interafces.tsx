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
    onDoneTaskList: (id: number) => void,
    taskListdeleteTask: (id: number)=> void
}

export type {
    ITask,
    ITaskInner
}