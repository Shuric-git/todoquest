import React, { FC, KeyboardEvent, useState } from 'react';
import './NewTaskForm.css';

export const NewTaskForm: FC<{
  appSubmitTask: (body: string, condition: string, timestamp: Date, min: number, sec: number) => void;
}> = (props) => {
  const { appSubmitTask = () => {} } = props;

  const [newTaskState, setNewTaskState] = useState({ body: '', min: 0, sec: 0 });

  const submitTask: (e: KeyboardEvent<HTMLInputElement>) => void = (e) => {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      appSubmitTask(newTaskState['body'], 'active', new Date(), newTaskState['min'] || 0, newTaskState['sec']);
      setNewTaskState({ body: '', min: 0, sec: 0 });
    }
  };

  return (
    <div className="newTaskWrapper">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTaskState['body']}
        onChange={(e) => setNewTaskState({ body: e.target.value, min: newTaskState['min'], sec: newTaskState['sec'] })}
        onKeyDown={(e) => submitTask(e)}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        autoFocus
        onChange={(e) => {
          if (/\d+/.test(e.target.value)) {
            console.log(e.target.value.match(/\d+/));
            setNewTaskState({ body: newTaskState['body'], min: Number(e.target.value), sec: newTaskState['sec'] });
          }
        }}
        onKeyDown={(e) => submitTask(e)}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        autoFocus
        onChange={(e) =>
          setNewTaskState({ body: newTaskState['body'], sec: Number(e.target.value), min: newTaskState['min'] })
        }
        onKeyDown={(e) => submitTask(e)}
      />
    </div>
  );
};
