import type { Status } from "../../types";

export type BoardAction =
  | {
      type: "ADD_TASK";
      payload: {
        title: string;
      };
    }
  | {
      type: "DELETE_TASK";
      payload: {
        taskId: string;
      };
    }
  | {
      type: "MOVE_TASK";

      payload: {
        id: string;
        destination: Status;
      };
    }
  | {
      type: "MOVE_MULTIPLE_TASK";

      payload: {
        id: string;
        destination: Status;
      };
    };
