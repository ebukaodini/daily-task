import { Board } from "./board";
import { TaskStatus } from "./task-status";

export const WelcomeTasks = 
[
  {
    id: '2021-09-23T18:51:18.157Z',
    description: 'Welcome. Daily Tasks is a basic todo application that follows the kanban style of task management.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:19.157Z',
    description: 'Here you can add tasks you intend to do in the future to the backlog board. And also archive completed or cancelled tasks.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:20.157Z',
    description: 'Description. You can edit task description after adding them. Double click on the description to edit.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:21.157Z',
    description: 'Tags. Click the more button to add and remove tags for your task.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:22.157Z',
    description: 'And yeah, you can add subtasks and update the status of your task as you go on.',
    timestamp: new Date().toUTCString(),
    subtasks: [
      {
        item: 'A sample subtask.',
        completed: false
      },
      {
        item: 'Go on and add more',
        completed: false
      }
    ],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:23.157Z',
    description: 'Settings. You can modify the title of the app in the settings.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:24.157Z',
    description: 'Settings. You can enable dark mode.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:25.157Z',
    description: 'Settings. Automation actions automatically reset the tasks board at the end of each day. Check subtasks below for more.',
    timestamp: new Date().toUTCString(),
    subtasks: [
      {
        item: 'To allow the automation actions, enable automation. It is enabled by default.',
        completed: false
      },
      {
        item: 'Set your preferred end of day and the board will reset at that time everyday.',
        completed: false
      },
      {
        item: 'The actions are basically operations to move tasks with specific status to  the board you want them at.',
        completed: false
      },
      {
        item: 'This is so you can be specific about the tasks you intend to do tomorrow.',
        completed: false
      },
      {
        item: 'Create tags for your tasks and choose specific colors for them.',
        completed: false
      },
    ],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:26.157Z',
    description: 'Thanks for seeing this app. You can install it on your device as it works offline. Thanks to PWA.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:27.157Z',
    description: 'Feel free to contribute to the repository. And please star the repository if you like the app. Enjoy the app 🙂❤️.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:28.157Z',
    description: 'Now you can set all these tasks to Done. 😉',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.tasks,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:29.157Z',
    description: 'This task would be done tommorrow.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.backlog,
    status: TaskStatus.pending,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
  {
    id: '2021-09-23T18:51:30.157Z',
    description: 'This task has been completed.',
    timestamp: new Date().toUTCString(),
    subtasks: [],
    board: Board.archive,
    status: TaskStatus.done,
    tags: [],
    order: 0,
    history: [
      {
        timestamp: new Date().toUTCString(),
        event: TaskStatus.pending
      }
    ]
  },
]
