import { useState } from 'react'
import './App.css'
import Authorization from './Pages/Authorization.jsx'
import Login from './Components/Login'
import Sign from './Components/Sign'
import Email from './Components/Email'
import Code from './Components/Code'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Authorization/>
    </div>
  )
}

export default App
