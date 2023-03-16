import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../types/_ITodo'

type TodoState = {
  list: ITodo[]
}

const initialState: TodoState = {
  list: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: payload,
        complete: false,
      })
    },
    toggleComplete(state, { payload }: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === payload)
      if (toggledTodo) {
        toggledTodo.complete = !toggledTodo.complete
      }
    },
    removeTodo(state, { payload }: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== payload)
    },
  },
})

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions

export const { reducer: todoReducer } = todoSlice
