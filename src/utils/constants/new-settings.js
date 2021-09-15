import { TaskStatus } from "./task-status";

export const NewSettings = {
  id: 'settings',
  title: 'Daily Tasks',
  darkMode: false,
  automateBoardReset: true,
  boardResetTime: '10:45 PM',
  resetActions: [
    {
      status: TaskStatus.cancelled,
      board: "Archive"
    },
    {
      status: TaskStatus.done,
      board: "Archive"
    }
  ],
  tags: [
    {
      colorCode: '7CC979',
      description: 'low priority'
    },
    {
      colorCode: 'EF5849',
      description: 'high priority'
    }
  ],
  maximumTaskDoing: 3
};