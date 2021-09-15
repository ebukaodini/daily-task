import { TaskStatus } from "./task-status";

export const NewTask = (board) => {
  return {
    id: new Date().toISOString(),
    description: '',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: board,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  };
}