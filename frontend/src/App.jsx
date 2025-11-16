import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchUsers from './components/FetchUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Anime</h1>
      <FetchUsers/>
    </>
  )
}

export default App
