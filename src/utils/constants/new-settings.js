import { Board } from "./board";
import { TaskStatus } from "./task-status";

export const NewSettings = {
  id: 'settings',
  title: 'Daily Tasks',
  darkMode: false,
  automateBoardReset: true,
  boardResetTime: '10:45 PM',
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
      id: '2021-09-22T15:29:12.482Z',
      colorCode: '7CC979',
      description: 'Low Priority'
    },
    {
      id: '2021-09-22T15:30:12.482Z',
      colorCode: 'EF5849',
      description: 'High Priority'
    }
  ],
  maximumTaskDoing: 1
};