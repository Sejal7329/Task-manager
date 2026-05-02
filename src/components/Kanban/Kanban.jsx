import { useState } from "react";
import Column from "./Column";
import "../style/Kanban.css";

export default function Kanban({ tasks, dispatch }) {
  const columns = ["todo", "inprogress", "review", "done"];

  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) return;

    dispatch({
      type: "ADD",
      task: {
        id: Date.now().toString(),
        title: title,
        assignee: assignee || "U",
        dueDate: Date.now(),
        status: "todo",
      },
    });

    setTitle("");
    setAssignee("");
  };

  return (
    <div>
      <div className="task-input-row">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new task..."
          className="task-input"
        />

        <input
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Assignee"
          className="assignee-input"
        />

        <button onClick={handleAddTask} className="add-task-btn">
          Add
        </button>
      </div>

      <div className="kanban-board">
        {columns.map((col) => (
          <Column
            key={col}
            status={col}
            tasks={tasks.filter((t) => t.status === col)}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}