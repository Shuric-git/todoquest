import {useState, useContext, createContext} from 'react'
import {Footer} from '../router'
import {NewTaskForm} from '../router'
import {TaskList} from '../router'
import todoItemContext from '../dataContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './App.css';
import {ITask} from "../interafces";
import React, { FC } from "react";

function App() {



  const appContext = useContext(todoItemContext)

  const {Provider} = todoItemContext

  const [dataState, setChangeData] = useState(appContext);

  console.log(dataState)

  function addItemHandler(text: string) {
    // console.log(text)
  };

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

  const AddItemBtn: FC<{ onClick: () => void }> = () => {
    return(
        <div className="add-Item__Form">
          <button>Add</button>
        </div>
    )
  }

  const itemStateChanger = createContext(onDeleteHandler)
  // console.log(itemStateChanger)

  return (
    <div className = "App">
      <section className = "todoapp">
        <header className = "header">
          <h1>todos</h1>
          <NewTaskForm />
        <AddItemBtn
        onClick = { () => addItemHandler('Yay') }
        />
        </header>
        <section className = "main">
          <Provider value={ dataState }>
            <TaskList tasks = { dataState }
              appDeleteTask = { onDeleteHandler }
              onDoneApp = { onDoneHandler }
            />
          </Provider>

          <Footer />
        </section>
      </section>
    </div>
  );
}

export {App};
