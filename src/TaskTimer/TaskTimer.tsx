import { FC } from 'react';

import './TaskTimer.css';

export const TaskTimer: FC = () => {
  return (
    <span className="description">
      <button className="icon icon-play"></button>
      <button className="icon icon-pause"></button>
      12:25
    </span>
  );
};
