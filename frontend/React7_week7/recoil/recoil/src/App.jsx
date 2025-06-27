import { countState } from './store/atoms/countState'
import { doubleCountState  } from './store/atoms/doubleCountState'
import { RecoilRoot, useRecoilValue,useSetRecoilState,  } from 'recoil'
import React from 'react'


function App() {

  return (
    <>
     <RecoilRoot>
        <Count />
     </RecoilRoot>
     
    </>
  )
}

function Count(){
  const count = useRecoilValue(countState);

  return <div>
    <h1>Numbers : {count}</h1>
    <IncreaseNum />
    <GetDouble />
  </div>
}

function GetDouble (){
  const doubledValue = useRecoilValue(doubleCountState);
  return <div>
    <h1>Double Value : {doubledValue}
    </h1>
  </div>
}

function IncreaseNum (){
  const setCount = useSetRecoilState(countState);
  return <div>
    <button onClick = {() => {
      setCount(prev => prev +1);
    }}>Increase Button</button>
  </div>
}

export default App
