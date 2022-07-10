import { FC, useState, useEffect } from 'react';

import { ITaskInner, ITask } from '../interafces';

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

  const [checked, setChecked] = useState<boolean>(isDone);
  const [timerState, setTimerData] = useState<{ min: number; sec: number }>({ min, sec });
  const [stopTimeState, setStopTimeState] = useState<boolean>(true);
  const [taskObj, setTaskObj] = useState<{
    id: number;
    isDone: boolean;
    body: string;
    timestamp: string;
    min: number;
    sec: number;
  }>({ id, isDone, body, timestamp, min, sec });

  useEffect(() => {
    let timerData: { min: number; sec: number } = { ...timerState };
    let timerId: ReturnType<typeof setTimeout>;

    if (!stopTimeState) {
      timerId = setInterval(() => {
        let newTimer = { ...timerData };
        if (newTimer['min'] < 0) {
          setStopTimeState(true);
          setTimerData({ min: 0, sec: 0 });
          clearInterval(timerId);
        }
        newTimer['sec'] -= 1;
        if (newTimer['sec'] < 0) {
          newTimer['sec'] = 59;
          newTimer['min'] -= 1;
        }
        timerData = { ...newTimer };
        setTimerData(timerData);
        if (timerData['min'] < 0) {
          setStopTimeState(true);
          setTimerData({ min: 0, sec: 0 });
          clearInterval(timerId);
        }
      }, 1000);
    }
    return () => {
      let stored: Array<ITask> = JSON.parse(localStorage.getItem('todoquest') || '[]');
      stored.map((item: { id: number; isDone: boolean; body: string; min: number; sec: number }) => {
        if (item.id === id) {
          item.isDone = isDone;
          item.body = body;
          item.min = timerData.min < 0 ? 0 : timerData.min;
          item.sec = timerData.min < 0 ? 0 : timerData.sec;
        }
      });
      setTaskObj(taskObj);
      localStorage.setItem('todoquest', JSON.stringify(stored));
      clearInterval(timerId);
    };
  }, [stopTimeState]);

  const checkedHandler: () => void = () => {
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
