import { useState, useEffect, useRef } from 'react'
import { useAppDispatch, useTodo } from 'shared/model'
import { TodoList } from 'components'
import { Sidebar } from 'components/layout/Sidebar/Sidebar'

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
    <>
      <header className='flex h-14 w-full items-center justify-center bg-teal-600 text-white'>
        <h1 className='text-3xl font-bold'>To-Do</h1>
      </header>
      <main className='mt-10 flex gap-6 px-8'>
        <div className='w-3/4'>
          <div className='flex gap-4'>
            <input
              value={value}
              onChange={handleChange}
              type='text'
              onKeyDown={handleKeyDown}
              ref={inputRef}
              className='w-3/4 rounded-xl border-2 border-teal-600'
            />

            <button
              onClick={handleAddTodo}
              className='w-1/4 rounded-xl bg-teal-600 font-bold text-white'
            >
              Add To-do
            </button>
          </div>
          <h1 className='text-center text-2xl font-bold'>To-do list</h1>
          <div className='mt-5 h-screen w-full border-2 border-teal-600'>
            <TodoList />
          </div>
        </div>
        <div className='w-1/4'>
          <Sidebar />
        </div>
      </main>
    </>
  )
}
