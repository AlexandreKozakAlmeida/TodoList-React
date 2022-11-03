import '../src/styles/Tasks.module.css'
import { TaskList } from './components/TaskList';

import './App.css'

function App() {
 
  return (
    <div className="App">
       <header>
          <h1>Todo List</h1>
      </header>
      <div className='principalList'>
          <h2> Minhas tarefas </h2>
        <TaskList />
      </div>
    </div>
  )
}

export default App;
