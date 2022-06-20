import React, { FC } from 'react';

const TasksFilter: FC<{
  filter: string;
  onFilterChange: (name: string) => void;
}> = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const buttonsEl = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? 'selected' : '';
    return (
      <li key={name}>
        <button className={clazz} key={name} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttonsEl}</ul>;
};

export { TasksFilter };
