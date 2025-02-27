import { useState } from 'react'
import TopBar from './components/TopBar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <TopBar />

  )
}

export default App
