import { useReducer } from "react";
import reducer from "../useReducer";

const initialState = [];
function TodoApp (){
    const [state, dispatch]=useReducer(reducer, initialState);
    return(
        <div>
            <h2>Your Todo List</h2>
            <div className="input">
                <label htmlFor="input">Add Your Jub:</label>
                <input type="text" />
            </div>
            <div className="btn">
                
            </div>
            
        </div>
    )
}
export default TodoApp;