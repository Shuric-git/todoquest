import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { Footer, NewTaskForm, TaskList } from '../router';
import './App.css';
import { ITask } from '../interafces';

export function App() {
  function createItem(body: string, condition: string = 'active', createDate: Date, min: number, sec: number) {
    let id = Date.now();
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

  let taskData: any = [];

  const [dataState, setChangeData] = useState(taskData);

  const [filterState, setFilter] = useState('all');

  useEffect(() => {
    setChangeData(JSON.parse(localStorage.getItem('todoquest') || '[]'));
  }, []);

  const editItem = (id: number) => {
    const editArr = JSON.parse(localStorage.getItem('todoquest') || '[]').map((el: ITask) => {
      if (el.id === id) {
        el.condition = 'editing';
      }
      return el;
    });
    console.log(editArr);
    setChangeData(editArr);
  };

  const rewriteData: (newData: Array<{}>) => void = (newData) => {
    localStorage.removeItem('todoquest');
    localStorage.setItem('todoquest', JSON.stringify(newData));
    setChangeData(newData);
  };

  function filterChange(filter: string) {
    setFilter(filter);
  }

  // function search(items: Array<ITask>, term: string) {
  //   if (term.length === 0) {
  //     return items;
  //   }
  //
  //   return items.filter((item: ITask) => {
  //     return item.body.indexOf(term) > -1;
  //   });
  // }

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

  // let term = '';

  const visibleItems = filter(JSON.parse(localStorage.getItem('todoquest') || '[]'), filterState);

  const taskEdit = (input: string, id: number) => {
    const editArr = JSON.parse(localStorage.getItem('todoquest') || '[]').map((el: ITask) => {
      if (el.id === id) {
        el.body = input;
        el.condition = 'active';
      }
      return el;
    });
    rewriteData(editArr);
  };

  const onDeleteHandler = (id: number) => {
    const deleteArr = JSON.parse(localStorage.getItem('todoquest') || '[]').filter((item: ITask) => item.id !== id);
    rewriteData(deleteArr);
  };

  const clearCompleted = () => {
    const incomplete = JSON.parse(localStorage.getItem('todoquest') || '[]').filter((item: ITask) => !item.isDone);
    rewriteData(incomplete);
  };

  const onDoneHandler = (id: number) => {
    const doneArr = JSON.parse(localStorage.getItem('todoquest') || '[]').map((el: ITask) => {
      if (el.id === id) {
        el.isDone = !el.isDone;
      }
      return el;
    });
    rewriteData(doneArr);
  };

  const doneCounter = dataState.filter((item: ITask) => !item.isDone).length;

  const onItemAdd = (text: string, condition = 'active', timestamp = new Date(), min: number, sec: number) => {
    let storedTasks = JSON.parse(localStorage.getItem('todoquest') || '[]');
    storedTasks.push(createItem(text, 'active', new Date(), min, sec));
    localStorage.setItem('todoquest', JSON.stringify(storedTasks));
    setChangeData(storedTasks);
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
