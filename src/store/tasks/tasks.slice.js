import { createSlice } from '@reduxjs/toolkit'
import { tasksActions, tasksExtraReducers } from './tasks.actions'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    tasksIsLoading: true
  },
  reducers: tasksActions,
  extraReducers: tasksExtraReducers
})

// export const { addTask, updateTask } = taskSlice.actions

export default taskSlice.reducer;