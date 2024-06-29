import './index.css'
import './server.js'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Vans from './pages/Vans.jsx'
import VansDetail from './pages/VansDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetail />} />
      </Routes>
    </BrowserRouter>    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
