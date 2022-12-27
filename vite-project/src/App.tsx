import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase</button>
      <button onClick={function(){
        setCount(count-1)
      }}>Decrease</button>
    </>
  )
}

export default App
