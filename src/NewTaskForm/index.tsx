import React, { FC, KeyboardEvent, useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm: FC<{
  appSubmitTask: (text: string, condition: string, timestamp: Date) => void;
}> = (props) => {
  const { appSubmitTask } = props;

  const [input, setInput] = useState('');

  const submitTask: (e: KeyboardEvent<HTMLInputElement>) => void = (e) => {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      appSubmitTask(input, 'active', new Date());
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => submitTask(e)}
    />
  );
};

export { NewTaskForm };
