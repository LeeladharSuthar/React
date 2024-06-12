import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        // these are default values. it will be displayed on todo tasks
        // {
        // id: 1,
        // title: "Hello World",
        // completed: false
        // }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((val) => val.id == action.payload.id ? { ...val, title: action.payload.title } : val)
            console.log(action.payload)
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((val) => val.id == action.payload.id ? { ...val, completed: !val.completed } : val)
        }
    }
})

export const { addTodo, updateTodo, toggleTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer