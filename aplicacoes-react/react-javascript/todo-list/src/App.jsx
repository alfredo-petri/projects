import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Limpar from './components/Limpar';



function App() {

  const [tasks, setTasks] = useState (JSON.parse(localStorage.getItem ('tasks')) || []);

  useEffect (()=>{
    localStorage.setItem ('tasks', JSON.stringify(tasks))
  },[tasks])

  const addTask = (task) => {  
    setTasks ([...tasks, {id: Date.now(), text: task, done: false}]);

    localStorage.setItem ('tasks', JSON.stringify(tasks))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task)=> task.id !== taskId))
  }

  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map((task)=> task.id === taskId ? {...task, done: !task.done} : task))
  }

  const handleLimpar = () => {
    setTasks([]);
  }  

  return (
    <>
      <h1>Todo List - React</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask = {deleteTask} onToggleTaskDone = {toggleTaskDone}/>
      <Limpar tasks={tasks} limpar={handleLimpar}/>
    </>
  )
}

export default App
