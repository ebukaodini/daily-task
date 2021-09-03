import { createSlice } from '@reduxjs/toolkit'
import { settingsActions } from './settings.actions'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    value: {}
  },
  reducers: settingsActions
})

// Action creators are generated for each case reducer function
export const { } = settingsSlice.actions

export default settingsSlice.reducer