export type Status = "todo" | "inprogress" | "review" | "done";
export type Priority = "critical" | "high" | "medium" | "low";

export interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: Priority;
  status: Status;
  startDate?: number;
  dueDate: number;
}