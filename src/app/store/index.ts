import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoReducer } from '../../shared/model/reducers'

const rootReducer = combineReducers({
  todoReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
