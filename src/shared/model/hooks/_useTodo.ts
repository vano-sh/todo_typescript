import { useAppSelector } from './_hook'
import { addTodo, removeTodo, toggleComplete } from '../reducers/_todoSlice'

export const useTodo = () => {
  const { list } = useAppSelector((state) => state.todoReducer)

  return { list, addTodo, removeTodo, toggleComplete }
}
