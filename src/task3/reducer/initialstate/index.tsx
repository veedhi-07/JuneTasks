import type { BoardState } from "../../types";

export const inintialState: BoardState = {
  tasks: {},

  cards: {
    todo: [],
    inProgress: [],
    done: [],
  },

  selectedTask: [],
};
