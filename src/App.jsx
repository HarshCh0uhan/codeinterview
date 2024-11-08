import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar'>
        <div className='logo'>Code Interview</div>
        <div className='main'>
          <div>Docs</div>
          <div>Price</div>
          <div>Enterprise</div>
          <div>WebContainers</div>
          <div>Blog</div>
        </div>
        <div className='signin'>
          <div>Sign in</div>
          <div> Get Started</div>
        </div>
      </div>
    </>
  )
}

export default App
