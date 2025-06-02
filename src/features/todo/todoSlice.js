import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: nanoid(), text: "Hello World"}],
    update: false,
    updateId: null,
    buttonState: 'Add Todo',
    placeholderContent: "Enter a Todo..."
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            // state.todos = state.todos.map((todo) => todo.id == action.payload.id ? {...todo, text: action.payload.text} : todo)
            state.todos.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text  
                    
                }
            })
        },
        updateVar: (state) => {
            state.update = !state.update
        },
        setButtonState: (state, action) => {
            state.buttonState = action.payload
        },
        setUpdateId: (state, action) => {
            state.updateId = action.payload
        },
        setplaceholderContent: (state, action) => {
            state.placeholderContent = action.payload
        }
    }
})

export const {addTodo, removeTodo, updateTodo, updateVar, setButtonState, setUpdateId, setplaceholderContent} = todoSlice.actions

export default todoSlice.reducer