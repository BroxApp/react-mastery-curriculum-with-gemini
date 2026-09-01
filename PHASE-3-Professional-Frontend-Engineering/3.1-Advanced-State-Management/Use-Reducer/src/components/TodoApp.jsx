import { useReducer, useState } from "react";
import reducer from "../useReducer";

const initialState = [];
function TodoApp (){
    const [state, dispatch]=useReducer(reducer, initialState);
    const [inputValue, setInputValue]=useState('');
    return(
        <div>
            <h2>Your Todo List</h2>
            <div className="input">
                <label htmlFor="input">Add Your Jub:</label>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button onClick={() => {
                    dispatch({ type: 'AddTodo', payload: inputValue });
                    setInputValue("");
                }}>Add</button>
            </div>
            <ul>
            {state.map(todo => (
                <li key={todo.id}>
                    <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch({ type: 'ToggleTodo', payload: todo.id })}>
                        Toggle
                    </button>
                    <button onClick={() => dispatch({ type: 'DeleteTodo', payload: todo.id })}>
                        Delete
                    </button>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default TodoApp;