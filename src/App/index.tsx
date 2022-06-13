import {useState} from 'react'
import {Footer} from '../router'
import {NewTaskForm} from '../router'
import {TaskList} from '../router'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './App.css';
import {ITask} from "../interafces";
import React from "react";

function App() {

  const taskData: Array<ITask> = [
    {isDone: true, id: 1, condition: 'completed', body: 'Completed task', timestamp: formatDistanceToNow(
          new Date(2022, 5, 7)
      )},
    {isDone: false, id: 2, condition: 'editing', body: 'Editing task', timestamp: formatDistanceToNow(
          new Date()
      )},
    {isDone: false, id: 3, condition: 'active', body: 'Active task', timestamp: formatDistanceToNow(
          new Date()
      )}
  ]

  const [taskState, setDone] = useState(taskData);
  const [deleteState, setDelete] = useState(taskData);

  const onDeleteHandler = (id: number) => {
    function deleter(deleteState: Array<ITask>) {
      const idx = deleteState.findIndex((el: ITask) => el.id === id)
      return [...deleteState.slice(0, idx), ...deleteState.slice(idx + 1)]

    }
  setDelete(deleter(deleteState))
  };

  const onDoneHandler = (id: number) => {
  function completer(taskState: Array<ITask>) {
    const completeArr = taskState.map((el: ITask) => {
        if (el.id === id) {
          el.isDone = !el.isDone
        }
        return el
      })
      return completeArr
    }
  setDone(completer(taskState));
  }

  return (
    <div className = "App">
      <section className = "todoapp">
        <header className = "header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className = "main">
          <TaskList tasks = { deleteState }
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
