import {Footer} from '../router'
import {NewTaskForm} from '../router'
import {TaskList} from '../router'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './App.css';

function App() {

  const taskData = [
    {id: 1, state: 'completed', body: 'Completed task', timestamp: formatDistanceToNow(
      new Date(2022, 5, 7)
    )},
    {id: 2, state: 'editing', body: 'Editing task', timestamp: formatDistanceToNow(
      new Date()
    )},
    {id: 3, state: 'active', body: 'Active task', timestamp: formatDistanceToNow(
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
          <TaskList tasks={taskData}/>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export {App};
