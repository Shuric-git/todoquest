interface ITask {
  id: number;
  body: string;
  condition: string;
  timestamp: string;
  isDone: boolean;
}

interface ITaskInner {
  isDone: boolean;
  id: number;
  body: string;
  timestamp: string;
  onDoneTaskList?: () => void;
  taskListdeleteTask?: () => void;
  editItem?: () => void;
}

export type { ITask, ITaskInner };
