import "../style/Card.css";

function formatDate(date) {
  const now = new Date();
  const d = new Date(date);

  const diff = Math.floor((now.getTime() - d.getTime()) / 86400000);

  if (diff === 0) return "Due Today";
  if (diff > 0) return `${diff} days overdue`;

  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
export default function Card({ task, dispatch }) {
  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("id", task.id)}
      className="task-card"
    >
      <div className="task-card-header">
        <div className="task-title">{task.title}</div>

        <button
          onClick={() => dispatch({ type: "DELETE", id: task.id })}
          className="delete-btn"
        >
          ✕
        </button>
      </div>

      <div className="task-card-footer">
        <div className="task-assignee">{task.assignee}</div>
        <div className="task-date">{formatDate(task.dueDate)}</div>
      </div>
    </div>
  );
}