import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from '../../services/database/database';

let db;
async function loadDb() { return await get(); }
loadDb()
  .then(_db => db = _db);

export const tasksActions = {
  // addTask: (state, { payload }) => {
  //   state.push({
  //     _id: new Date().toISOString(),
  //     description: payload,
  //     completed: false
  //   });
  // },
  // updateTask: (state, taskId) => {
  //   let newState = state;
  //   let id = newState.findIndex(task => task._id === taskId.payload)
  //   if (id !== -1)
  //     newState[id].completed = !newState[id].completed;
  //   return newState;
  // },
};

export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async () => {
    try {
      let tasks = [];
      let docs = await db.tasks.find().exec();
      await docs.forEach(async doc => {
        tasks.push(await doc.toJSON());
      });
      return tasks;
    } catch (error) {
      console.error(error.message);
    }
  })

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task) => {
    try {
      let doc = await db.tasks.insert(task);
      return await doc.toJSON();
    } catch (error) {
      console.error(error.message);
    }
  })

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task) => {
    try {
      let doc = await db.tasks.findOne(task.id).exec()
      let updated = await doc.atomicUpdate((doc) => {
        return task;
      });
      return updated.toJSON();
    } catch (error) {
      console.error(error.message);
    }
  }
)

export const tasksExtraReducers = builder => {
  builder
    .addCase(addTask.fulfilled, (state, { payload }) => {
      state.tasks.push(payload);
    })
    .addCase(getTasks.fulfilled, (state, { payload }) => {
      state.tasksIsLoading = false;
      // handle issue of no payload
      state.tasks = payload === undefined ? [] : payload;
    })
    .addCase(updateTask.fulfilled, (state, { payload }) => {
      let index = state.tasks.findIndex(task => task.id === payload.id);
      if (index > -1)
        state.tasks[index] = payload;
    })
};
