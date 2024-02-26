import React from 'react'

import {useSelector, useDispatch} from "react-redux"

import { toggleTodo, removeTodo, filtersTodo } from '../slices/todoSlice'

const TodoList = () => {

  const {list, filter} = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const filteredList = list.filter ((todo) => {
    if (filter==="all") return true;
    if (filter==="completed") return todo.completed;
    if (filter==="incomplete") return !todo.completed;
    return true;
  });

  return (
    <div>
      <button onClick={() => dispatch(filtersTodo("all")) }>Todas</button>
      <button onClick={() => dispatch(filtersTodo("completed")) }>Completas</button>
      <button onClick={() => dispatch(filtersTodo("incomplete")) }>Incompletas</button>

      <ul>
        {filteredList.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => dispatch (toggleTodo(todo.id))} className={todo.completed ? "line-trough" : null}>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
        
      </ul>
    </div>


  )
}

export default TodoList