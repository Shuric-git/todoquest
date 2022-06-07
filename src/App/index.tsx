import React from 'react';

import {Footer} from '../router'
import {NewTaskForm} from '../router'
import {TaskList} from '../router'

import '../index.css';

function App() {

  const taskData = [
    {body: 'completed', state: 'Completed task', timestamp: 'date'},
    {body: 'editing', state: 'Editing task', timestamp: 'date'},
    {body: 'active', state: 'Active task', timestamp: 'date'},
  ]

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={taskData}/>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export {App};
