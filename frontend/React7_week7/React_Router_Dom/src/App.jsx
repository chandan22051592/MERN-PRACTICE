import React,{ useState,Suspense } from 'react'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Dashboard = React.lazy(()=>import('./components/dashboard'))
// import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar/>
        <Routes>
            
          <Route path='/dashboard' element={<Suspense fallback={<div>Loading Dashboard...</div>}><Dashboard /></Suspense>} />
          <Route path='/' element={<Landing/>}/>

        </Routes>
      
      </BrowserRouter>

    </div>
    
  )
}

function AppBar(){
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => {
        navigate("/");
      }}>Landing</button>

      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboad</button>
    </div>

  </div>
  

}
export default App
