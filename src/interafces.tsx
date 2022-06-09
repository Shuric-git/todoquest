interface ITask {
    id: number,
    body: string,
    condition: string,
    timestamp: string
}

interface ITaskInner {
    body: string, 
    timestamp: string,
    onDone?: Function
}

export type {
    ITask,
    ITaskInner
}