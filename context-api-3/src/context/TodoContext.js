import React, { useContext } from "react";


// React.createContext serves as the default value or "blueprint" for the context. This default value will be used if a component tries to consume the context but is not within a TodoContextProvider that provides actual values.
export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            title: "Learn React",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

})


export const useTodo = () => useContext(TodoContext)

export const TodoContextProvider = TodoContext.Provider