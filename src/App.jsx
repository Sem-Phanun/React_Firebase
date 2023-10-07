import React, { useEffect, useState } from 'react'
import { AiOutlinePlus} from 'react-icons/ai'
import Todo from './components/Todo'
import { style } from './components/style'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { db } from './firebase/firebase'
const App = () => {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')

  //create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input === ''){
      alert("Please fill text.")
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })

    
  }

  //read todo from firebase
  useEffect(()=> {
    const q = query(collection(db, 'todos'))
    const unsubcribe = onSnapshot(q, (querySnapshot)=> {
      let todoArr = []
      querySnapshot.forEach((doc) =>{
        todoArr.push({...doc.data(), id: doc.id})
      })
      setTodo(todoArr)
    })
    return ()=> unsubcribe
  },[])
  //update todo in firebase

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  //delete todo

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>

        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e)=> setInput(e.target.value)} className={style.input} type="text" placeholder='Add Todo'/>
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todo.map((todo, index)=>(
            <Todo key={index} todo={todo}toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </ul>
        {todo.length <1 ? null : <p className={style.count}>You have {todo.length} of todos</p> }
      </div>
    </div>
  )
}

export default App
