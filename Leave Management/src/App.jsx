import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from './components/UserProfile'
import PastLeaves from './components/PastLeave'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">

      <UserProfile />

      <div className="main-content">
        <PastLeaves />
      </div>

    </div>
  )
}

export default App
