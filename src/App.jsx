import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { loginContext } from './components/loginContext'

import Login from './components/login'
import Profile from './components/profile'

function App() {
  // const loginContext=createContext();
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
  const [showProfile,setShowProfile]=useState(false)


  return (
   <>
  
   <loginContext.Provider value={{username,setUsername,password,setPassword,showProfile,setShowProfile}}>
    {showProfile ? <Profile/> :            <Login />
 }

      </loginContext.Provider>
      </>
      
   
   
  
  )
}

export default App
