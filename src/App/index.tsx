// import {useState} from 'react'
import {Footer} from '../router'
import {NewTaskForm} from '../router'
import {TaskList} from '../router'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './App.css';
import {ITask} from "../interafces";

function App() {

  const onDeleteHandler = (id: number) => console.log('id')

  const onDoneHandler = (id: number) => {

  }

  const taskData: Array<ITask> = [
    {isDone: true, id: 1, condition: 'completed', body: 'Completed task', timestamp: formatDistanceToNow(
      new Date(2022, 5, 7)
    )},
    {isDone: false, id: 2, condition: 'editing', body: 'Editing task', timestamp: formatDistanceToNow(
      new Date()
    )},
    {isDone: true, id: 3, condition: 'active', body: 'Active task', timestamp: formatDistanceToNow(
      new Date()
    )}
  ]

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={taskData}
          onDeleted={ onDeleteHandler }
          onDoneHandler={ onDoneHandler }
          />
          <Footer />
        </section>
      </section>
    </div>
  );
}

export {App};
