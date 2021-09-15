import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './ui/ui.slice'
import taskReducer from './tasks/tasks.slice'
import settingsReducer from './settings/settings.slice'

export default configureStore({
  reducer: {
    ui: uiReducer,
    tasks: taskReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload'],
        // Ignore these paths in the state
        ignoredPaths: ['tasks', 'settings'],
      },
    }),
})
