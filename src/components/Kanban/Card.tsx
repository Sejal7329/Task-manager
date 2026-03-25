function getPriorityColor(priority: string) {
  switch (priority) {
    case "critical":
      return "bg-red-500";
    case "high":
      return "bg-orange-400";
    case "medium":
      return "bg-yellow-400";
    case "low":
      return "bg-green-400";
  }
}

function formatDate(date: number) {
  const now = new Date();
  const d = new Date(date);

  const diff = Math.floor((now.getTime() - d.getTime()) / 86400000);

  if (diff === 0) return "Due Today";
  if (diff > 0) return `${diff} days overdue`;

  return d.toLocaleDateString();
}

export default function Card({ task }: any) {
  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("id", task.id)}
      className="bg-white p-3 rounded-lg shadow mb-3 cursor-grab active:cursor-grabbing hover:shadow-md transition"
    >
      <div className="font-medium text-sm mb-2">{task.title}</div>

      <div className="flex justify-between items-center text-xs">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 text-white text-[10px]">
          {task.assignee}
        </div>

        <div
          className={`px-2 py-0.5 text-white rounded text-[10px] ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </div>

        <div className="text-gray-500">
          {formatDate(task.dueDate)}
        </div>
      </div>
    </div>
  );
}