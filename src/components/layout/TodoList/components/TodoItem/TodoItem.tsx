import { ITodo } from 'shared/model/types'
import { useAppDispatch, useTodo } from 'shared/model'

export const TodoItem: React.FC<ITodo> = ({ id, title, complete }) => {
  const dispatch = useAppDispatch()
  const { removeTodo, toggleComplete } = useTodo()

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
