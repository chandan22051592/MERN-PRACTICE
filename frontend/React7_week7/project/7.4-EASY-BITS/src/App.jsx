import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { jobsAtom, messagekAtom, networkAtom, notificationAtom, totalSum } from './atoms'

function App() {
  

  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const messageNotificationCount = useRecoilValue(messagekAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const finalNotificationCout = useRecoilValue(totalSum)
  return <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? '99+':networkNotificationCount})</button>
      <button>Jobs({jobsNotificationCount})</button>
      <button>Messaging ({messageNotificationCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me {finalNotificationCout}</button>
  </div>
}
export default App


