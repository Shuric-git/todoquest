import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { Footer, NewTaskForm, TaskList } from '../router';
import './App.css';
import { ITask } from '../interafces';

export function App() {
  function createItem(body: string, condition: string = 'active', createDate: Date, min: number, sec: number) {
    let id = Date.now();
    localStorage.setItem(id.toString(), JSON.stringify({ min: min, sec: sec }));
    return {
      isDone: false,
      id: id,
      condition,
      body,
      timestamp: formatDistanceToNow(createDate),
      min,
      sec,
    };
  }

  const taskData = [];

  for (let i = 0; i < localStorage.length; i++) {
    let key: string = localStorage.key(i) || '';
    taskData.push(JSON.parse(localStorage.getItem(key) || ''));
  }
  console.log(taskData);
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

    return items.filter((item: ITask) => {
      return item.body.indexOf(term) > -1;
    });
  }

  function filter(items: Array<ITask>, filterState: string) {
    switch (filterState) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item: ITask) => !item.isDone);
      case 'completed':
        return items.filter((item: ITask) => item.isDone);
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
      }
      return el;
    });
    setChangeData(editArr);
  };

  const onDeleteHandler = (id: number) => {
    const deleteArr = dataState.filter((item: ITask) => item.id !== id);
    setChangeData(deleteArr);
  };

  const clearCompleted = () => {
    const incomplete = dataState.filter((item: ITask) => !item.isDone);
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

  const doneCounter = dataState.filter((item: ITask) => !item.isDone).length;

  const onItemAdd = (text: string, condition = 'active', timestamp = new Date(), min: number, sec: number) => {
    const addArr = [...dataState, createItem(text, 'active', new Date(), min, sec)];
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
