import { Task, Status, Priority } from "../types/task";

const users = ["Netu", "Abhi", "Anya", "Sejal", "Arbaz", "Komu"];

export function generateTasks(count = 500): Task[] {
  const statuses: Status[] = ["todo", "inprogress", "review", "done"];
  const priorities: Priority[] = ["critical", "high", "medium", "low"];

  return Array.from({ length: count }).map((_, i) => {
    const now = Date.now();
    const start =
      Math.random() > 0.2 ? now - Math.random() * 20 * 86400000 : undefined;
    const due = now + (Math.random() * 20 - 10) * 86400000;

    return {
      id: "task-" + i,
      title: "Task " + i,
      assignee: users[Math.floor(Math.random() * users.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      startDate: start,
      dueDate: due,
    };
  });
}