import { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {

  const [todoItems, setTodoItems] = useState([])

  useEffect(() => {
    const initTodoItems = async () => {
      const todoFromServer = await fetchTodoFromServer()
      setTodoItems(todoFromServer)
    }
    initTodoItems()
  }, [])

  // Fetch Tasks
  const fetchTodoFromServer = async () => {
    const res = await fetch('http://localhost:8080/api/list')
    const data = await res.json()
    return data
  }

  //Add todo
  const addTodo = async (newTodo) => {
    console.log('Adding :' + newTodo)
    const res = await fetch('http://localhost:8080/api/add?todo=' + newTodo, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      }
    })
    const data = await res.json()
    console.log('Added:'+JSON.stringify(data))
    setTodoItems(data)
  }

  const toggleCompletion = async (id) => {
    console.log('Updating :' + id)
    const res = await fetch('http://localhost:8080/api/toggle/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      }
    })
    const data = await res.json()
    console.log('Updated:'+JSON.stringify(data))
    setTodoItems(data)
  }

  const removeTodo = async (id) => {
    console.log('Deleting :' + id)
    const res = await fetch('http://localhost:8080/api/delete/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    })
    const data = await res.json()
    setTodoItems(data)
  }





  return (
    <div className="container">
      <Header title="My Todo List:"></Header>
      <TodoForm onAddTodo={addTodo} />
      {todoItems.length > 0 ? (
        <TodoList todoItems={todoItems}
          onDelete={removeTodo}
          onToggle={toggleCompletion}
        />
      ) : (
        ''
      )}

    </div>
  );
}

export default App;
