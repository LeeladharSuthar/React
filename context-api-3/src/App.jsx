import { useState, useEffect } from "react";

import { TodoContextProvider } from "./context/";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const todoObj = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    setTodos((oldTodos) => [todoObj, ...oldTodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.title = todo;
        }
        return item;
      });
    });
  };

  // const updateTodo = (id, todo) => {
  //   setTodos((prev) =>
  //     prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, title: todo} : prevTodo))
  //   );
  // };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  // const deleteTodo = (id) => {
  //   setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  // };

  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
  };

  // const toggleComplete = (id) => {
  //   setTodos((prev) =>
  //     prev.map((prevTodo) =>
  //       prevTodo.id === id
  //         ? { ...prevTodo, completed: !prevTodo.completed }
  //         : prevTodo
  //     )
  //   );
  // };

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos && localTodos.length) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div id={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
