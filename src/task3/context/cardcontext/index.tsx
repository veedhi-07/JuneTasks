import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { BoardState } from "../../types";
import { BoardReducer } from "../../reducer/boardreducer";
import { inintialState } from "../../reducer/initialstate";

interface BoardContextType {
  state: BoardState;
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
}

export const BoardContext = createContext<BoardContextType | null>(null);

type BoardPeoviderProps = {
  children: ReactNode;
};

export function BoardProvider({ children }: BoardPeoviderProps) {
  const [state, dispatch] = useReducer(BoardReducer, inintialState);

  const addTask = (title: string) => {
    dispatch({
      type: "ADD_TASK",
      payload: { title },
    });
  };

  const deleteTask = (taskId: string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { taskId },
    });
  };

  return (
    <BoardContext.Provider value={{ state, addTask, deleteTask }}>
      {children}
    </BoardContext.Provider>
  );
}
export function useKanbanBoard() {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useKanbanBoard must be used within BoardProvider");
  }
  return context;
}
