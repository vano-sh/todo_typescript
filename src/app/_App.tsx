import { useState, useEffect, useRef } from 'react'
import { useAppDispatch, useTodo } from 'shared/model'
import { TodoList } from 'components'

export const App: React.FC = () => {
  const [value, setValue] = useState('')
  const { addTodo } = useTodo()

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === 'Enter') {
      handleAddTodo()
    }
  }

  const handleAddTodo = () => {
    dispatch(addTodo(value))
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          type='text'
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={handleAddTodo}>Add</button>
        <TodoList />
      </div>
    </div>
  )
}
