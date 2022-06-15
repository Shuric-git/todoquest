import {useState, useContext, createContext} from 'react'
import {Footer} from '../router'
import {NewTaskForm, AddItemBtn} from '../router'
import {TaskList} from '../router'
// import todoItemContext from '../dataContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './App.css';
import {ITask} from "../interafces";
import React, { FC } from "react";

function App() {

  let maxId: number = 100;

  // const [IDState, setID] = useState(1);

  function createItem(body: string, condition: string, createDate: any) {
    maxId++
    console.log(maxId)
    return {
      isDone: false,
      id: maxId,
      condition,
      body,
      timestamp: formatDistanceToNow( createDate )
    }
  }

  const taskData = [
    createItem('Completed task', 'completed', new Date(2022, 5, 7)),
    createItem('Editing task', 'editing', new Date),
    createItem('Active task', 'active',  new Date),
  ]

  // const appContext = useContext(todoItemContext)
  //
  // const {Provider} = todoItemContext

  const [dataState, setChangeData] = useState(taskData);

  // console.log(dataState)

  const onDeleteHandler = (id: number) => {
    function deleter(dataState: Array<ITask>) {
      const idx = dataState.findIndex((el: ITask) => el.id === id)
      return [...dataState.slice(0, idx), ...dataState.slice(idx + 1)]

    }
    setChangeData(deleter(dataState))
  };
// console.log(dataState)
  const onDoneHandler = (id: number) => {
  function completer(dataState: Array<ITask>) {
    const completeArr = dataState.map((el: ITask) => {
        if (el.id === id) {
          el.isDone = !el.isDone
        }
        return el
      })
      return completeArr
    }
    setChangeData(completer(dataState));
  }

  const onItemAdd = (text: string) => {
    const newArr = [...dataState, createItem('Created task', 'active', new Date)]
    setChangeData(newArr)
  }

  return (
    <div className = "App">
      <section className = "todoapp">
        <header className = "header">
          <h1>todos</h1>
          <NewTaskForm />
        <AddItemBtn
          itemAddhandler = { onItemAdd }
        />
        </header>
        <section className = "main">
          {/*<Provider value={ dataState }>*/}
            <TaskList tasks = { dataState }
              appDeleteTask = { onDeleteHandler }
              onDoneApp = { onDoneHandler }
            />
          {/*</Provider>*/}

          <Footer />
        </section>
      </section>
    </div>
  );
}

export {App};
