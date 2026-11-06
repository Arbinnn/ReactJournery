import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { removeTodo } from '../features/todoSlice';

function Todos() {
  const todos= useSelector(state => state.todo1.todos); 
  // debugger
  const dispatch = useDispatch();
  return (
    <>
    <div>Todos</div>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button className='bg-red-500 text-white px-2 py-1 rounded ml-2'  onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
      </li>
    ))}
    </>
  )
}

export default Todos