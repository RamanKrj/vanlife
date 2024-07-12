import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
  
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  
  return (
    <>
      <nav className="host-nav">
        <NavLink 
          to="/host"
          style={({isActive}) => isActive ? activeStyle : null}
          end
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/host/Income"
          style={({isActive}) => isActive ? activeStyle : null}
        >
          Income
        </NavLink>
        <NavLink 
          to="/host/Reviews"
          style={({isActive}) => isActive ? activeStyle : null}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
