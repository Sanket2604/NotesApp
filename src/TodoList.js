import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
    if(todos.length ===0){
        return(
            <div className="empty_todo">
                <p>Your Todo List is Empty!!!</p>
                <p> Add Tasks To Todo List!!!</p>
            </div>
        )
    }
    else{
        return (
            todos.map(todo => {
                return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            })
        )
    }
}
