import { FC, useState, useEffect } from 'react';

import { ITaskInner } from '../interafces';

import './Task.css';

export const Task: FC<ITaskInner> = (props: ITaskInner) => {
  const {
    id,
    isDone,
    body,
    timestamp,
    min,
    sec,
    onDoneTaskList = () => {},
    taskListdeleteTask = () => {},
    editItem,
  } = props;

  const [checked, setChecked] = useState(isDone);
  const [timerState, setTimerData] = useState({ min, sec });
  const [stopTimeState, setStopTimeState] = useState(true);
  const [taskObj, setTaskObj] = useState({ id, isDone, body, timestamp, min, sec });

  useEffect(() => {
    let timerData = { ...timerState };
    let timerId: ReturnType<typeof setTimeout>;
    let stored = JSON.parse(localStorage.getItem('todoquest') || '[]');
    if (!stopTimeState) {
      timerId = setInterval(() => {
        let newTimer = { ...timerData };
        newTimer['sec'] = newTimer['sec'] - 1;
        if (newTimer['sec'] < 0) {
          newTimer['sec'] = 59;
          newTimer['min'] = newTimer['min'] - 1;
        }
        timerData = { ...newTimer };
        setTimerData(timerData);
        if (timerData['min'] < 0) {
          console.log('time is run out');
          setTimerData({ min: 0, sec: 0 });
          clearInterval(timerId);
        }
      }, 1000);
    }
    return () => {
      stored.map((item: any) => {
        if (item.id === id) {
          item.isDone = isDone;
          item.body = body;
          item.min = timerData.min;
          item.sec = timerData.sec;
        }
      });
      setTaskObj(taskObj);
      localStorage.setItem('todoquest', JSON.stringify(stored));
      console.log('timer is stopped');
      clearInterval(timerId);
    };
  }, [stopTimeState]);

  const checkedHandler = () => {
    onDoneTaskList();
    setChecked(!checked);
  };

  return (
    <div className="view">
      <input id="taskBody" className="toggle" type="checkbox" onChange={checkedHandler} checked={checked} />
      <label
        htmlFor="taskBody"
        onClick={(e) => {
          e.preventDefault();
          checkedHandler();
        }}
      >
        <span className="title">{body}</span>
        <span className="description">
          {stopTimeState ? (
            <button
              className="icon icon-play"
              onClick={(e) => {
                e.stopPropagation();
                setStopTimeState(false);
              }}
            ></button>
          ) : (
            <button
              className="icon icon-pause"
              onClick={(e) => {
                {
                  e.stopPropagation();
                  setStopTimeState(true);
                  console.log(stopTimeState);
                }
              }}
            ></button>
          )}
          <span className="timerVisual">{`${timerState['min']}:${timerState['sec']}`}</span>
        </span>
        <span className="created">{timestamp}</span>
      </label>
      <button className="icon icon-edit" onClick={editItem} />
      <button className="icon icon-destroy" onClick={taskListdeleteTask} />
    </div>
  );
};
