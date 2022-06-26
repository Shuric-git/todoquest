import { FC, KeyboardEvent, useState } from 'react';

import { ITaskInner } from '../interafces';

import './Task.css';

const Task: FC<ITaskInner> = (props: ITaskInner) => {
  const { isDone, body, timestamp, onDoneTaskList, taskListdeleteTask, editItem } = props;

  const [checked, setChecked] = useState(isDone);

  const checkedHandler = () => {
    onDoneTaskList();
    setChecked(!checked);
  }

  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={checkedHandler} checked={checked} />
      <label onClick={checkedHandler}>
        <span className="description">{body}</span>
        <span className="created">{timestamp}</span>
      </label>
      <button className="icon icon-edit" onClick={editItem} />
      <button className="icon icon-destroy" onClick={taskListdeleteTask} />
    </div>
  );
}

Task.defaultProps = {
  onDoneTaskList: () => {},
  taskListdeleteTask: () => {},
};

export { Task };
