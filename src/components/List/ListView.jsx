import Row from "./Row";
import "../style/list.css";

export default function ListView({ tasks, dispatch }) {
  return (
    <div className="list-container">
      <div className="list-header">
        <div>Title</div>
        <div>Status</div>
        <div>Assignee</div>
      </div>

      <div className="list-body">
        {tasks.map((t) => (
          <Row key={t.id} task={t} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}