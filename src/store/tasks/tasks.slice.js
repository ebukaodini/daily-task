import { createSlice } from '@reduxjs/toolkit'
import { tasksActions } from './tasks.actions'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: tasksActions
})

// Action creators are generated for each case reducer function
export const { addTask, getTasks, updateTask } = taskSlice.actions

export default taskSlice.reducer