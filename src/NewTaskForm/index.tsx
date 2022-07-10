import React, { FC, KeyboardEvent, useState } from 'react';
import './NewTaskForm.css';

export const NewTaskForm: FC<{
  appSubmitTask: (body: string, condition: string, timestamp: Date, min: number, sec: number) => void;
}> = (props) => {
  const { appSubmitTask = () => {} } = props;

  const [newTaskState, setNewTaskState] = useState({ body: '', min: '', sec: '' });

  const submitTask: (e: KeyboardEvent<HTMLInputElement>) => void = (e) => {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      appSubmitTask(
        newTaskState['body'],
        'active',
        new Date(),
        isNaN(parseInt(newTaskState['min'])) ? 0 : parseInt(newTaskState['min']),
        isNaN(parseInt(newTaskState['sec'])) ? 0 : parseInt(newTaskState['sec'])
      );
      setNewTaskState({ body: '', min: '', sec: '' });
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
        placeholder="min"
        value={newTaskState['min']}
        onChange={(e) => {
          setNewTaskState({
            body: newTaskState['body'],
            min: e.target.value.replace(/\D+/g, '').slice(0, 2),
            sec: newTaskState['sec'],
          });
        }}
        onKeyDown={(e) => {
          submitTask(e);
        }}
      />
      <input
        className="new-todo-form__timer"
        placeholder="sec"
        value={newTaskState['sec']}
        onChange={(e) => {
          setNewTaskState({
            body: newTaskState['body'],
            sec: e.target.value.replace(/\D+/g, '').slice(0, 2),
            min: newTaskState['min'],
          });
        }}
        onKeyDown={(e) => submitTask(e)}
      />
    </div>
  );
};
