import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import './css/todo_main.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=>todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name==='') return
    var today = new Date;
    var date = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false, date: date}]
    })
    
    todoNameRef.current.value = null
  }

  function handleClearTodo(){
    const newTodos = todos.filter(todo=>!todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className="todo_cont">
      <input className="tode_inp" ref={todoNameRef} type="text" placeholder="Add a New Note"/>
      <div className="btn_cont">
        <span className="button btn1" onClick={handleAddTodo}>Add Todo</span>
        <span className="button btn2" onClick={handleClearTodo}>Clear Completed</span>
      </div>
      <div className="stat">
        <div>{todos.filter(todo=>!todo.complete).length} Task Left</div>
        <div>{todos.filter(todo=>todo.complete).length} Tasks Completed</div>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App;
