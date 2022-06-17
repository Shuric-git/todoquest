import {useState, useContext, createContext} from 'react'
import {Footer} from '../router'
import {NewTaskForm} from '../router'
import {TaskList} from '../router'
// import todoItemContext from '../dataContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './App.css';
import {ITask} from "../interafces";
import React, { FC } from "react";

function App() {

  function createItem(body: string, condition: string = 'active', createDate: Date) {

    return {
      isDone: false,
      id: Date.now(),
      condition,
      body,
      timestamp: formatDistanceToNow( createDate )
    }
  };

  const taskData = [
    {isDone: true, condition: 'completed', id: 2135642, body: 'Completed task', timestamp: formatDistanceToNow( new Date(2022, 5, 7) )},
    {isDone: false, condition: 'editing', id: 2112356442, body: 'Completed task', timestamp: formatDistanceToNow( new Date() )},
    {isDone: false, condition: 'active', id: 2134642, body: 'Active task', timestamp: formatDistanceToNow( new Date(2022, 5, 1) )},
  ];

  const [dataState, setChangeData] = useState(taskData);

  const [filterState, setFilter] = useState('done');

  function filterChange(filter: string) {
    setFilter(filter)
  }

  function search (items: Array<ITask>, term: string) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.body.indexOf(term) > -1;
    });
  }

  function filter(items: Array<ITask>, filterState: string) {
    switch(filterState) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.isDone);
      case 'done':
        return items.filter(item => item.isDone);
      default:
        return items;
    }
  }

  let term = ''

  const visibleItems = filter(search(dataState, term), filterState)

  console.log(visibleItems)

  const onDeleteHandler = (id: number) => {
    const deleteArr = dataState.filter( item => item.id !== id);
    setChangeData(deleteArr)
  };

  const onDoneHandler = (id: number) => {
    const doneArr = dataState.map((el: ITask) => {
        if (el.id === id) {
          el.isDone = !el.isDone
        }
        return el
      });
    setChangeData(doneArr);
  };

  const doneCounter = dataState.filter(item => !item.isDone).length

  const onItemAdd = (text: string) => {
    const addArr = [...dataState, createItem(text, 'active', new Date())]
    setChangeData(addArr)
  }

  return (
    <div className = "App">
      <section className = "todoapp">
        <header className = "header">
          <h1>todos</h1>
          <NewTaskForm
          appSubmitTask = { onItemAdd }
          />
        </header>
        <section className = "main">
            <TaskList tasks = { visibleItems }
              appDeleteTask = { onDeleteHandler }
              onDoneApp = { onDoneHandler }
            />
          <Footer
          doneCounter={doneCounter}
          onFilterChange={filterChange}
          filter={filterState}
          />
        </section>
      </section>
    </div>
  );
}

export {App};
