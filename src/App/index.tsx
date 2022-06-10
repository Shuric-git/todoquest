import {useState} from 'react'
import {Footer} from '../router'
import {NewTaskForm} from '../router'
import {TaskList} from '../router'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './App.css';

function App() {

  const onDeleteHandler = () => console.log('id')

  const taskData = [
    {id: 1, condition: 'completed', body: 'Completed task', timestamp: formatDistanceToNow(
      new Date(2022, 5, 7)
    )},
    {id: 2, condition: 'editing', body: 'Editing task', timestamp: formatDistanceToNow(
      new Date()
    )},
    {id: 3, condition: 'active', body: 'Active task', timestamp: formatDistanceToNow(
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
          onDeleted={ onDeleteHandler }/>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export {App};
