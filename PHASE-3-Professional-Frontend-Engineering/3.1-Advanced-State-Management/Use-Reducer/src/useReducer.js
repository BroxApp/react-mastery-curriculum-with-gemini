

function reducer (state, action){
    switch (action.type){
        case 'AddTodo':
            return[...state, {id:Date.now(), text:action.payload, done:false}];
        case 'ToggleTodo':
            return state.map(todo => todo.id===action.payload ? {...todo, done:!todo.done} : todo);
        case 'DeleteTodo':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}
export default reducer;