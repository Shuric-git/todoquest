import { FC, KeyboardEvent, useState } from 'react';

import { Task } from '../router';
import { ITask } from '../interafces';

import './TaskList.css';

const TaskList: FC<{
  tasks: Array<ITask>;
  appDeleteTask: (id: number) => void;
  taskEdit: (input: string, id: number) => void;
  editItem: (id: number) => void;
  onDoneApp: (id: number) => void;
}> = (props) => {
  const { tasks, onDoneApp, appDeleteTask, editItem, taskEdit } = props;

  const [input, setInput] = useState('');

  const elements = tasks.map((item: ITask) => {
    let { id, isDone, condition, ...itemProps } = item;

    const taskEditHandler: (e: KeyboardEvent<HTMLInputElement>, id: number) => void = (e) => {
      if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        taskEdit(input, id);
      }
    };

    condition === 'editing' ? (condition = 'editing') : isDone ? (condition = 'completed') : (condition = 'active');

    return (
      <li key={id} className={condition}>
        <Task
          {...itemProps}
          id={id}
          isDone={isDone}
          onDoneTaskList={() => onDoneApp(id)}
          taskListdeleteTask={() => appDeleteTask(id)}
          editItem={() => editItem(id)}
        />
        {condition === 'editing' ? (
          <input
            type="text"
            className="edit"
            placeholder="Editing task"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => taskEditHandler(e, id)}
          />
        ) : (
          ''
        )}
      </li>
    );
  })
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  appDeleteTask: () => {},
  onDoneApp: () => {},
};

export { TaskList };
