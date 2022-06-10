interface ITask {
    id: number,
    body: string,
    condition: string,
    timestamp: string,
    onDeleted: ()=> void
}

interface ITaskInner {
    body: string, 
    timestamp: string,
    onDone?: () => void,
}

export type {
    ITask,
    ITaskInner
}