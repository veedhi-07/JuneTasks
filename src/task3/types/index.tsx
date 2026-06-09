export interface Task {
  id: string;
  title: string;
  status: "todo" | "inProgress" | "done";
}
