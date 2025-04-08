import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      title : "Go to Gym",
      description : "Between 7-9"
    },
    {
      id :2,
      title : "BreakFast Time",
      description : "Between 10-11"
    },
    {
      id :3,
      title : "Study",
      description : "Between 12-4"
    }
  ]);


  function addTodo(){
    setTodos([...todos,{
      id : 4,
      title : Math.random(),
      description : Math.random()
    }])
  }

  return (
    <>
    <button onClick={addTodo}>Add Todo</button>
    <Todo todos = {todos}></Todo>
    </>
  )
}

function Todo({todos}){
  return <div>
    {todos.map((todo)=>(
      <div key = {todo.id}>
        <h1>{todo.title}</h1>
        <h3>{todo.description}</h3>
      </div>
    ))}
  </div>

}
export default App
