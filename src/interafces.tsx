interface ITask {
    id: number,
    body: string,
    condition?: string,
    timestamp: string,
    isDone: boolean,
    // onDoneHandler: () => void
}

interface ITaskInner {
    id: number,
    body: string, 
    timestamp: string,
    onDone?: (id: number) => void,
    deleteTask?: ()=> void
}

export type {
    ITask,
    ITaskInner
}