import React from 'react'
import Tasks from './Tasks'


const TaskList = ({tasks, onDeleteTask, onToggleTaskDone}) => {
  return (
    <ul>
      {tasks.map((task)=> (
        <Tasks key={task.id} task={task} onDelete = {()=> onDeleteTask(task.id)} onToggleDone = {() => onToggleTaskDone(task.id)}/>
      ))}
    </ul>
  )
} 

export default TaskList