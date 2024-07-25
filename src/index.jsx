import './index.css'
import './server.js'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import About from './pages/About.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Home from './pages/Home.jsx'
import HostLayout from './components/HostLayout.jsx'
import HostVanDetail from './pages/host/HostVanDetail.jsx'
import HostVanInfo from './pages/host/HostVanInfo.jsx'
import HostVanPhotos from './pages/host/HostVanPhotos.jsx'
import HostVanPricing from './pages/host/HostVanPricing.jsx'
import HostVans from './pages/host/HostVans.jsx'
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
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
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
