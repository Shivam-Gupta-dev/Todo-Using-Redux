import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo, setButtonState, updateVar, setplaceholderContent } from '../features/todo/todoSlice'

function AddTodo() {

  const [input, setInput] = useState('')

  const placeholderContent = useSelector(state => state.placeholderContent)
  const buttonState = useSelector(state => state.buttonState)

  const update = useSelector(state => state.update)
  const updateId = useSelector(state => state.updateId)

  const dispatch = useDispatch()
  

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (!update) {
      dispatch(addTodo(input))

      setInput('')
    }
    else {

      dispatch(updateTodo({id: updateId,text: input}))

      setInput('')
      dispatch(updateVar())

      dispatch(setButtonState('Add Todo'))
      dispatch(setplaceholderContent('Enter a Todo...'))
    }
  }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={placeholderContent}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {buttonState}
      </button>
    </form>
  )
}

export default AddTodo