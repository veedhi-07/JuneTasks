import type { BoardAction } from "../boardaction";
import type { BoardState } from "../../types";

export const BoardReducer = (
  state: BoardState,
  action: BoardAction,
): BoardState => {
  switch (action.type) {
    case "ADD_TASK": {
      const id = crypto.randomUUID();

      return {
        ...state,

        tasks: {
          ...state.tasks,
          [id]: {
            id,
            title: action.payload.title,
            status: "todo",
          },
        },
        cards: {
          ...state.cards,
          todo: [...state.cards.todo, id],
        },
      };
    }
    case "DELETE_TASK": {
      const { taskId } = action.payload;

      const task = state.tasks[taskId];

      if (!task) {
        return state;
      }

      const { [taskId]: deletedTask, ...remainingTasks } = state.tasks;

      return {
        ...state,

        tasks: remainingTasks,

        cards: {
          ...state.cards,
          [task.status]: state.cards[task.status].filter((id) => id !== taskId),
        },
      };
    }
    default:
      return state;
  }
};
