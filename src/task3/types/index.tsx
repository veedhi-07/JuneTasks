export type Status = "todo" | "inProgress" | "done";

export interface Task {
  id: string;
  title: string;
  status: Status;
}

export interface BoardState {
  tasks: Record<string, Task>;

  cards: {
    todo: string[];
    inProgress: string[];
    done: string[];
  };

  selectedTask: string[];
}
