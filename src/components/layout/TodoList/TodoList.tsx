import { useAppSelector } from 'shared/model'
import { TodoItem } from './components'

export const TodoList: React.FC = () => {
  const { list } = useAppSelector((state) => state.todoReducer)

  return (
    <div>
      {list.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  )
}
