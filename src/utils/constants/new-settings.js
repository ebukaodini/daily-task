import { Board } from "./board";
import { TaskStatus } from "./task-status";

export const NewSettings = {
  id: 'settings',
  title: 'Daily Tasks',
  darkMode: false,
  automateBoardReset: true,
  boardResetTime: '10:45', // PM
  resetActions: [
    {
      status: TaskStatus.pending,
      board: Board.backlog
    },
    {
      status: TaskStatus.cancelled,
      board: Board.archive
    },
    {
      status: TaskStatus.done,
      board: Board.archive
    }
  ],
  tags: [
    {
      colorCode: '7CC979',
      description: 'Low Priority'
    },
    {
      colorCode: 'EF5849',
      description: 'High Priority'
    }
  ],
  maximumTaskDoing: 1
};