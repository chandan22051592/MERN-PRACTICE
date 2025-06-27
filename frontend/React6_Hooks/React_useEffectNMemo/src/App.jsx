import { memo,useEffect, useState, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
// // ---------------------------------useMemo-------------------------------------------------------
//   const [input,setInput] = useState(0);
//   const [counter, setCounter] = useState(0);
//   let sum = useMemo(()=>{
//     console.log("Memo got called")
//     let sum=0;
//     for(let i=1;i<=input;i++){
//       sum += i; 
//     }
//     return sum;

//   },[input]);  


//   return(
//     <>
//       <div>
//         <input onChange={function(e){
//           setInput(e.target.value);
//         }}placeholder={"Sum 1-n"}></input>
//       </div>
//       <br />
//       Sum from 1 to {input} is {sum};

//       <br />

//       <div>
//       <br />
//         <button onClick={()=>{setCounter(counter +1 );}}>
//           Count {counter}
//         </button>
//       </div>

//     </>

//   )
// }



// ---------------------------------useEffect-------------------------------------------------------


//   const [todos, setTodos] = useState([])
//   const [index,setIndex] = useState(1);
//   const [obj,setObj] = useState({})

//   useEffect(()=>{
//     axios.get("http://localhost:3000/todos")
//     .then(function(response){
//       console.log(response.data)
//       setTodos(response.data);
//     })
//   },[])

  
//   useEffect(()=>{
//     axios.get(`http://localhost:3000/todo?id=${index}`)
//     .then(function(res){
//       setObj(res.data);

//     })
//   },[index])

//   return (
//     <>
//     <div>
//     <button onClick = {updateIndex}>Update Index</button>
//     </div>
    

//     <ShowTodo>
//       <h1>GOt By Id</h1>
//       <h2>{obj.title}</h2>
//       <h5>{obj.description}</h5>
//     </ShowTodo>
    
//     {todos.map(todo =><Todo title={todo.title} description={todo.description}/>)}
      
//     </>
//   )

//   function updateIndex(){
//     setIndex(index+1)
//   }

//   function ShowTodo({children}){
//     return(
//       <div>
//         {children}
//       </div>
//     )
//   }

//   function Todo(props){
//     return(
//       <div key={props.id}>
//         <h1>{props.title}</h1>
//         <h3>{props.description}</h3>
//       </div>
//     )
//   }

// }


// ---------------------------------useCallback-------------------------------------------------------
// similar to useMemo



  const [counter,setCounter] = useState(0);
  const a =useCallback(()=>{
    console.log("hii there")
  },[])

  return <div>
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Counter {counter}</button>

    <Demo a={a}/>
  </div>
}
const Demo = memo(function({a}){
  console.log('rendered');
  return <div>
    hi therew
  </div>
})





export default App;
