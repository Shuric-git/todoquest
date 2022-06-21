import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { Footer, NewTaskForm, TaskList } from '../router';
import './App.css';
import { ITask } from '../interafces';

function App() {
  function createItem(body: string, condition: string = 'active', createDate: Date) {
    return {
      isDone: false,
      id: Date.now(),
      condition,
      body,
      timestamp: formatDistanceToNow(createDate),
    };
  }

  const taskData = [
    {
      isDone: true,
      condition: 'completed',
      id: 2135642,
      body: 'Completed task',
      timestamp: formatDistanceToNow(new Date(2022, 5, 7)),
    },
    {
      isDone: false,
      condition: 'active',
      id: 2112356442,
      body: 'Editing task',
      timestamp: formatDistanceToNow(new Date()),
    },
    {
      isDone: false,
      condition: 'active',
      id: 2134642,
      body: 'Active task',
      timestamp: formatDistanceToNow(new Date(2022, 5, 1)),
    },
  ];

  const [dataState, setChangeData] = useState(taskData);

  const [filterState, setFilter] = useState('all');

  const editItem = (id: number) => {
    const editArr = dataState.map((el: ITask) => {
      if (el.id === id) {
        el.condition = 'editing';
      }
      return el;
    });
    setChangeData(editArr);
  };

  function filterChange(filter: string) {
    setFilter(filter);
  }

  function search(items: Array<ITask>, term: string) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.body.indexOf(term) > -1;
    });
  }

  function filter(items: Array<ITask>, filterState: string) {
    switch (filterState) {
    case 'all':
      return items;
    case 'active':
      return items.filter((item) => !item.isDone);
    case 'completed':
      return items.filter((item) => item.isDone);
    default:
      return items;
    }
  }

  let term = '';

  const visibleItems = filter(search(dataState, term), filterState);

  const taskEdit = (input: string, id: number) => {
    const editArr = dataState.map((el: ITask) => {
      if (el.id === id) {
        el.body = input;
        el.condition = 'active';
        el.isDone = false;
      }
      return el;
    });
    setChangeData(editArr);
  };

  const onDeleteHandler = (id: number) => {
    const deleteArr = dataState.filter((item) => item.id !== id);
    setChangeData(deleteArr);
  };

  const clearCompleted = () => {
    const incomplete = dataState.filter((item) => !item.isDone);
    setChangeData(incomplete);
  };

  const onDoneHandler = (id: number) => {
    const doneArr = dataState.map((el: ITask) => {
      if (el.id === id) {
        el.isDone = !el.isDone;
      }
      return el;
    });
    setChangeData(doneArr);
  };

  const doneCounter = dataState.filter((item) => !item.isDone).length;

  const onItemAdd = (text: string) => {
    const addArr = [...dataState, createItem(text, 'active', new Date())];
    setChangeData(addArr);
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm appSubmitTask={onItemAdd} />
        </header>
        <section className="main">
          <TaskList
            tasks={visibleItems}
            appDeleteTask={onDeleteHandler}
            onDoneApp={onDoneHandler}
            editItem={editItem}
            taskEdit={taskEdit}
          />
          <Footer
            doneCounter={doneCounter}
            onFilterChange={filterChange}
            filter={filterState}
            clearCompleted={clearCompleted}
          />
        </section>
      </section>
    </div>
  );
}

export { App };
