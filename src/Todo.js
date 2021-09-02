import React from 'react'
import tick from './css/check-solid.svg'
import imp from './css/important.svg'

function Tick({todo}){
    var today = new Date;
    var date = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
    if(todo.complete){
        return(
            <img src={tick} height="20px" width="20px"/>
        )
    }
    else if(date !== todo.date){
        return(
            <img src={imp} height="20px" width="20px"/>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}
export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div className="todo_card" onClick={handleTodoClick}>
            <div className="title">{todo.name}</div>
            <div className="date">{todo.date}</div>
            <Tick todo={todo} />
        </div>
    )
}
