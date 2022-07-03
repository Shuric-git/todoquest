interface ITask {
  id: number;
  body: string;
  condition: string;
  timestamp: string;
  isDone: boolean;
  min: number;
  sec: number;
}

interface ITaskInner {
  isDone: boolean;
  id: number;
  body: string;
  timestamp: string;
  min: number;
  sec: number;
  onDoneTaskList?: () => void;
  taskListdeleteTask?: () => void;
  editItem?: () => void;
}

export type { ITask, ITaskInner };
