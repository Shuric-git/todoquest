interface ITask {
    id: number,
    body: string,
    state: string,
    timestamp: string
}

interface ITaskInner {
    body: string, 
    timestamp: string
}

export type {
    ITask,
    ITaskInner
}