import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title : "Go to Gym",
    description : "Go to Gym from 7-9",
    completed : false

  },{
    title : "Study DSA",
    description : "Study DSA from 9-11",
    completed : false

  }
])

  return (
    <div className="card">
        {/* {JSON.stringify(todos)} */}

        <Todo title={todos[0].title} description={todos[0].description}></Todo>
        <Todo title={todos[1].title} description={todos[1].description}></Todo>

    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
