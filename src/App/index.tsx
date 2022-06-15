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

  let maxId: number = 100;

  function createItem(body: string, condition: string = 'active', createDate: Date) {

    return {
      isDone: false,
      id: Date.now(),
      condition,
      body,
      timestamp: formatDistanceToNow( createDate )
    }
  };

  function createItem2(body: string, condition: string = 'active', createDate: Date) {

    return {
      isDone: false,
      id: maxId++,
      condition,
      body,
      timestamp: formatDistanceToNow( createDate )
    }
  };

  const taskData = [
    createItem2('Completed task', 'completed', new Date(2022, 5, 7)),
    createItem2('Editing task', 'editing', new Date()),
    createItem2('Active task', 'active',  new Date(2022, 5, 1)),
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
    const addArr = [...dataState, createItem(text, 'active', new Date)]
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
