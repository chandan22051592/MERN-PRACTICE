import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState(0);
  useEffect(()=>{
    // fetchcall

  },[])
  

  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title = {todo.title} description ={todo.description}/>)}
     
    </>
  )
}

function Wrapper({children}){
  return (<div style = {{padding : "20px", color : "blue", backgroundColor : "white"}}>
    {children}
  </div>

  )
}

function Todo({title,description}){
  <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
