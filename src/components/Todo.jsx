import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { style } from './style'
const Todo = ({todo, toggleComplete, deleteTodo }) => {
  return (
    <>
        <li className={todo.completed? style.liComplete : style.li}>
            <div className={style.row}>
                <input onChange={()=> toggleComplete(todo)} type="checkbox" checked={todo.completed? 'checked' : ''} />
                <p onClick={()=> toggleComplete(todo)} className={todo.completed? style.textComplete : style.text}>{todo.text}</p>
            </div>
            <button onClick={()=> deleteTodo(todo.id)} className={style.remove}>{<AiFillDelete/>}</button>
        </li>
    </>
  )
}

export default Todo
