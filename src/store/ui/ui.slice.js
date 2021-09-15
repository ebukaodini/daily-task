import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui.actions'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light-theme',
    page: 'tasks'
  },
  reducers: uiActions
})

export const { setTheme, setPage } = uiSlice.actions

export default uiSlice.reducer