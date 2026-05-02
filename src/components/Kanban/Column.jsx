 import Card from "./Card";
import "../style/Column.css";

export default function Column({ status, tasks, dispatch }) {
  return (
    <div
      className="kanban-column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const id = e.dataTransfer.getData("id");
        dispatch({ type: "MOVE", id, status });
      }}
    >
      <div className="column-header">
        <h3 className="column-title">
          {status === "inprogress" ? "In Progress" : status}
        </h3>

        <span className="column-count">{tasks.length}</span>
      </div>

      <div className="column-body">
        {tasks.length === 0 ? (
          <div className="empty-column">No tasks here</div>
        ) : (
          tasks.map((t) => <Card key={t.id} task={t} dispatch={dispatch} />)
        )}
      </div>
    </div>
  );
}