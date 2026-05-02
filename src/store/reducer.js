export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [action.task, ...state.tasks],
      };

    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.id),
      };

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