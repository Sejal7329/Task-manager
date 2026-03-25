export default function Row({ task, dispatch }: any) {
  return (
    <div className="grid grid-cols-3 p-3 border-b text-sm hover:bg-gray-50">
      <div>{task.title}</div>

      <select
        className="border rounded px-2 py-1"
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

      <div>{task.assignee}</div>
    </div>
  );
}