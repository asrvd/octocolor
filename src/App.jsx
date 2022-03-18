import { useState } from 'react'
import './App.css'
import Color from './components/Color'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
      <div className="App">
        <Header />
        <Color />
        <Footer />
      </div>
  )
}

export default App
