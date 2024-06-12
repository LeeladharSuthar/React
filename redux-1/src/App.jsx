import { useSelector } from "react-redux";
import { TodoItem, AddTodo } from "./components";

function App() {
  const todos = useSelector((state) => {
    return state.todo.todos; // state.{key of reducer in store.js}.{value to get from slice todoSlice.js}
  });

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div id={todo.id} className="w-full" key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
