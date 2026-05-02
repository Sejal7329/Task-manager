import "../components/style/Header.css";
export default function Header({ view, setView }) {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Task Tracker</h1>

        <div className="view-toggle">
          {["kanban", "list"].map((v) => (
            <button
              key={v}
              className={`toggle-btn ${view === v ? "active" : ""}`}
              onClick={() => setView(v)}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}