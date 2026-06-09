import InputTodo from "../../components/input";
import type { Status } from "../../types";
import { useKanbanBoard } from "../../context/cardcontext";

interface Props {
  title: string;
  status: Status;
}

export default function MainLayout({ title, status }: Props) {
  const { state } = useKanbanBoard();
  const ids = state.cards[status];
  return (
    <>
      <div>
        <div className=" flex flex-col min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-blue-400">
          <InputTodo />
          <div className="flex flex-row justify-center items-center">
            <div className="text-2xl text-center h-120 w-100 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-8 w-full max-w-md mr-5">
              Todo
            </div>
            <div className="  text-2xl  text-center h-120 w-100 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-8  w-full  max-w-md  mr-5">
              InProgress
            </div>
            <div className=" text-2xl text-center h-120 w-100  bg-white/30 backdrop-blur-md rounded-2xl shadow-xl  border border-white/40  p-8 w-full max-w-md">
              Completed
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
