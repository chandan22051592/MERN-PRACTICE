import React, { useState } from "react";

function App() {
  const [title,setTitle] = useState("My name is Aman1");
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return (
    <React.Fragment>
      <button onClick={updateTitle}>Update the title</button>
      <br></br>
      <Header title={title}></Header> <br />
      <Header title="Aman2"></Header> <br />
      <Header title="Aman3"></Header> <br />
      <Header title="Aman4"></Header> <br />
      <Header title="Aman5"></Header> <br />
      <Header title="Aman6"></Header> 

      
    </React.Fragment>
  )
}



const Header = React.memo(function Header({title}){
  console.log("Rendering Header:", title);
  return <b>
    {title}
  </b>
})

export default App
