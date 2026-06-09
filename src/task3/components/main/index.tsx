import { useState } from "react";
import type { Task } from "../../types";

export default function MainLayout() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  //addtask
  const addTask = () => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: text,
      status: "todo",
    };
    setTasks((prev) => [...prev, newTask]);

    setText("");
  };
  //deletetask
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const todoTasks = tasks.filter((task) => task.status === "todo");
  //dragtask
  const dragTask = (taskId: string, status: Task["status"]) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task)),
    );
  };
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");

  const doneTasks = tasks.filter((task) => task.status === "done");
  return (
    <>
      <div>
        <div className=" flex flex-col min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-blue-400">
          {/* <InputTodo /> */}
          <div className="">
            <div className="h-45">
              <label>Enter a Todo:</label>
              <input
                className="outline h-7 w-40 mt-5 rounded-2xl"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
              <button
                onClick={addTask}
                className=" ml-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Add Todo
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (!draggedTask) return;
                dragTask(draggedTask, "todo");
                setDraggedTask(null);
              }}
              className="text-2xl text-center h-120 w-100 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-8 w-full max-w-md mr-5"
            >
              <h2>
                <strong>Todo</strong>
              </h2>
              {todoTasks.map((task) => (
                <div
                  className="flex flex-row"
                  key={task.id}
                  draggable
                  onDragStart={() => setDraggedTask(task.id)}
                >
                  <div className="text-2xl ">{task.title}</div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 p-2 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (!draggedTask) return;
                dragTask(draggedTask, "inProgress");
                setDraggedTask(null);
              }}
              className="text-2xl  text-center h-120 w-100 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-8  w-full  max-w-md  mr-5"
            >
              <h2>
                <strong>InProgress</strong>
              </h2>

              {inProgressTasks.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => setDraggedTask(task.id)}
                  className="flex flex-row"
                >
                  <div>{task.title}</div>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 p-2 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (!draggedTask) return;
                dragTask(draggedTask, "done");
                setDraggedTask(null);
              }}
              className=" text-2xl text-center h-120 w-100  bg-white/30 backdrop-blur-md rounded-2xl shadow-xl  border border-white/40  p-8 w-full max-w-md"
            >
              <h2>
                <strong>Completed</strong>
              </h2>
              {doneTasks.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => setDraggedTask(task.id)}
                  className="flex flex-row"
                >
                  <div>{task.title}</div>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 p-2 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
