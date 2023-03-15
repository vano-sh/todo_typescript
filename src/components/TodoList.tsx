import { useAppSelector } from '../hook'
import { TodoItem } from './TodoItem'

export const TodoList: React.FC = () => {
  const { list } = useAppSelector((state) => state)

  return (
    <div>
      {list.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  )
}
