import './index.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
