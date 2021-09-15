import { createSlice } from '@reduxjs/toolkit'
import { settingsActions, settingsExtraReducers } from './settings.actions'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {},
  reducers: settingsActions,
  extraReducers: settingsExtraReducers
})

// Action creators are generated for each case reducer function
// export const {} = settingsSlice.actions

export default settingsSlice.reducer