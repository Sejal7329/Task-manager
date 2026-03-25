import { Task, Status } from "../types/task";

export type State = {
  tasks: Task[];
};

export type Action =
  | { type: "MOVE"; id: string; status: Status }
  | { type: "UPDATE"; id: string; patch: Partial<Task> };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "MOVE":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, status: action.status } : t
        ),
      };

    case "UPDATE":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, ...action.patch } : t
        ),
      };

    default:
      return state;
  }
}