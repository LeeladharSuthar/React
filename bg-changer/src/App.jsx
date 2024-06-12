import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");
  return (
    <div
      className="h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border-black border-2">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={(e) => {
              console.log(e);
              setColor(e.target.innerHTML);
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Brown
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "aqua" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            Aqua
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "white" }}
            onClick={(e) => {
              setColor(e.target.innerHTML);
            }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
