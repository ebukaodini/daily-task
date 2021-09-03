import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui.actions'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: 'light-theme',
  reducers: uiActions
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = uiSlice.actions

export default uiSlice.reducer