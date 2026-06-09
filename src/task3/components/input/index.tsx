import { useState } from "react";
import { useKanbanBoard } from "../../context/cardcontext";

export default function InputForm() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const { addTask, deleteTask } = useKanbanBoard();

  const handlSubmit = () => {
    if (!title.trim()) return;

    addTask(title);

    setTitle("");
    deleteTask(id);
  };
  return (
    <>
      <div className="">
        <div className="h-45">
          <label>Enter a Todo:</label>
          <input
            className="outline h-7 w-40 mt-5 rounded-2xl"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button
            onClick={handlSubmit}
            className=" ml-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}
