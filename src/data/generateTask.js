const users = ["Name"];

export function generateTasks(count = 0) {
  const statuses = ["todo", "inprogress", "review", "done"];

  return Array.from({ length: count }).map((_, i) => {
    const now = Date.now();
    const start =
      Math.random() > 0.2 ? now - Math.random() * 20 * 86400000 : undefined;

    const due = now + (Math.random() * 20 - 10) * 86400000;

    return {
      id: "task-" + i,
      title: "Task " + (i + 1),
      assignee: users[Math.floor(Math.random() * users.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      startDate: start,
      dueDate: due,
    };
  });
}
