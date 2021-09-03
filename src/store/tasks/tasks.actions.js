import { connect, disconnect } from "../../services";

export const tasksActions = {
  addTask: (state, description) => {
    var todo = {
      _id: new Date().toISOString(),
      description: description.payload,
      completed: false
    };
    return [...state, todo]
  },
  updateTask: (state, taskId) => {
    let newState = state;
    let id = newState.findIndex(task => task._id === taskId.payload)
    if (id !== -1)
      newState[id].completed = !newState[id].completed;
    return newState;
  },
  getTasks: state => {
    console.log('getting tasks...')
  }
};
