import { useState } from "react";
import "./todo.css"
import { TodoItem } from "./TodoItem";
function Todo(){
    const handlechange = (e)=>{
        setText(e.target.value);
    }
    const handleAddTodo = (e) => {
        setTodos([...todos, text]);
        setText("");
    }
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    return (
    
    <div>
        <div className="items_main_div">
        <TodoItem tod={todos}></TodoItem>
        </div>
        <h1 className="main_heading">Todo</h1>
        <input
        className="input_box"
        placeholder="Add Task"
        value={text}
        type="text"
        onChange={handlechange}
        />

        <button onClick={handleAddTodo} className="button_add_task">+</button>
        {/* <div className="items_main_div">
        <TodoItem tod={todos}></TodoItem>
        </div> */}
        
    </div>
    )
}

export {Todo};