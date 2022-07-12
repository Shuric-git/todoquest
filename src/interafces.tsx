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

interface INewTask {
  (body: string,
  condition: string,
  timestamp: Date,
  min: number,
  sec: number,
  ): void;
}

interface ITaskObj {
  id: number;
  isDone: boolean;
  body: string;
  timestamp: string;
  min: number;
  sec: number;
}

export type { ITask, ITaskInner, INewTask, ITaskObj };
