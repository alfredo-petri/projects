import { useState } from 'react'
import './App.css'
import Exercicios from './components/Exercicios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Exercicios name="Alfredo"/>
    </>
  )
}

export default App
