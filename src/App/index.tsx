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
    {isDone: true, condition: 'editing', id: 2112356442, body: 'Completed task', timestamp: formatDistanceToNow( new Date() )},
    {isDone: false, condition: 'active', id: 2134642, body: 'Active task', timestamp: formatDistanceToNow( new Date(2022, 5, 1) )},
  ];

  const [dataState, setChangeData] = useState(taskData);

  const onDeleteHandler = (id: number) => {
    const idx = dataState.findIndex((el: ITask) => el.id === id);
    const deleteArr = [...dataState.slice(0, idx), ...dataState.slice(idx + 1)];
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
  }

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
            <TaskList tasks = { dataState }
              appDeleteTask = { onDeleteHandler }
              onDoneApp = { onDoneHandler }
            />
          <Footer />
        </section>
      </section>
    </div>
  );
}

export {App};
