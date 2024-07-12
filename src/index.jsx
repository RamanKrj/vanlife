import './index.css'
import './server.js'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import About from './pages/About.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Home from './pages/Home.jsx'
import HostLayout from './components/HostLayout.jsx'
import Income from './pages/host/Income.jsx'
import Layout from './components/Layout.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Reviews from './pages/host/Reviews.jsx'
import Vans from "./pages/vans/Vans.jsx"
import VansDetail from './pages/vans/VansDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VansDetail />} />
          </Route>  
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
