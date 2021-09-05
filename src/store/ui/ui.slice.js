import { createSlice } from '@reduxjs/toolkit'
import { useLocation } from 'react-router'
import { uiActions } from './ui.actions'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light-theme',
    page: 'tasks'
  },
  reducers: uiActions
})

export const { toggleTheme, setPage } = uiSlice.actions

export default uiSlice.reducer