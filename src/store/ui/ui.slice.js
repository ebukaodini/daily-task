import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui.actions'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light-theme',
    page: 'tasks',
    openManageTagsModal: false
  },
  reducers: uiActions
})

export const { setTheme, setPage, toggleManageTagsModal } = uiSlice.actions

export default uiSlice.reducer