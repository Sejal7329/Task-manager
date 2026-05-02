import "../style/Row.css";

export default function Row({ task, dispatch }) {
  return (
    <div className="list-row">
      <div className="row-title">{task.title}</div>

      <select
        className="row-select"
        value={task.status}
        onChange={(e) =>
          dispatch({ type: "MOVE", id: task.id, status: e.target.value })
        }
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="review">Review</option>
        <option value="done">Done</option>
      </select>

      <div className="row-assignee">{task.assignee}</div>
    </div>
  );
}