import { useAppDispatch } from '../hook'
import { removeTodo, toggleComplete } from '../store/todoSlice'
import { ITodo } from '../types/data'

export const TodoItem: React.FC<ITodo> = ({ id, title, complete }) => {
  const dispatch = useAppDispatch()

  const handleToggleTodoChange = (id: string) => {
    dispatch(toggleComplete(id))
  }
  const handleRemoveTodoChange = (id: string) => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <input
        type='checkbox'
        checked={complete}
        onChange={() => handleToggleTodoChange(id)}
      />
      {title}
      <button onClick={() => handleRemoveTodoChange(id)}>X</button>
    </div>
  )
}
