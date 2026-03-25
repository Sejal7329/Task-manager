import Column from "./Column";
import { Task } from "../../types/task";

export default function Kanban({ tasks, dispatch }: any) {
  const columns = ["todo", "inprogress", "review", "done"];

  return (
    <div className="grid grid-cols-4 gap-4">
      {columns.map((col) => (
        <Column
          key={col}
          status={col}
          tasks={tasks.filter((t: Task) => t.status === col)}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}