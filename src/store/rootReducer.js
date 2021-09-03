import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './ui/ui.slice'
import taskReducer from './tasks/tasks.slice'
import settingsReducer from './settings/settings.slice'

export default configureStore({
  reducer: {
    ui: uiReducer,
    tasks: taskReducer,
    settings: settingsReducer,
  }
})