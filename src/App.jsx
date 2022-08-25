import { useState } from 'react'
import Header from '../components/Header'
import MainContent from '../components/Maincon'
import Footer from '../components/Footer'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
