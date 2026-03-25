import Card from "./Card";

export default function Column({ status, tasks, dispatch }: any) {
  return (
    <div
      className="bg-gray-50 p-3 rounded-xl border shadow-sm h-[75vh] flex flex-col"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const id = e.dataTransfer.getData("id");
        dispatch({ type: "MOVE", id, status });
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold capitalize text-sm">
          {status.replace("inprogress", "In Progress")}
        </h3>
        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
          {tasks.length}
        </span>
      </div>

      <div className="overflow-auto flex-1">
        {tasks.length === 0 && (
          <div className="text-gray-400 text-sm text-center mt-10">
            No tasks here
          </div>
        )}

        {tasks.map((t: any) => (
          <Card key={t.id} task={t} />
        ))}
      </div>
    </div>
  );
}