export default function Header({ view, setView }: any) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-semibold">Task Tracker</h1>

      <div className="flex gap-2 bg-white p-1 rounded-lg shadow">
        {["kanban", "list", "timeline"].map((v) => (
          <button
            key={v}
            className={`px-4 py-1 rounded-md text-sm capitalize ${
              view === v
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setView(v)}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}