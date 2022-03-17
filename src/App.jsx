import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Color from './components/Color'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Header />
        <Color />
        <Footer />
      </div>
  )
}

export default App
