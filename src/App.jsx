// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Companies from './components/companies'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Companies />
    </>
  )
}

export default App
