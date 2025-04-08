import { useState } from 'react'//hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// if you use this syntax react will not watch it as it requires a proper syntax so it's a wrong way

// let state = {
//   count : 0
// }

function App() { //App() = component

  const [count,setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count+1} setCount={setCount}></CustomButton>
      <CustomButton count={count+2} setCount={setCount}></CustomButton>
      <CustomButton count={count+3} setCount={setCount}></CustomButton>
    </div>
  )
}


function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return<button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  

}

export default App
