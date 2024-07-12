import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />    
      </main>
      <Footer />
    </div>
  )
}







