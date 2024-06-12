import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: input, name: "leeladhar" }));
    setInput("");
  };

  return (
    <>
      <form className="flex" onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
