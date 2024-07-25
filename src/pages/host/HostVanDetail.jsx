import { Link, NavLink, Outlet } from "react-router-dom"

import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
  
  const [hostVan, SetHostVan] = React.useState(null)
  const { id } = useParams()
  
  const activeStyle = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "bold"
  }
  
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was NOT ok")
        }
        return res.json()
      })
      .then(data => SetHostVan(data.vans))
  }, [])
  
  if (!hostVan) {
    return <h4>Loading...</h4>
  }
  
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to Vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">          
          <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${hostVan.type}`}>{hostVan.type}</i>
            <h3>{hostVan.name}</h3>
            <h4>${hostVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({isActive}) => isActive ? activeStyle : null}
          >Detail
          </NavLink>
          <NavLink
            to="Pricing"
            style={({isActive}) => isActive ? activeStyle : null}
          >Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({isActive}) => isActive ? activeStyle : null}
          >Photos
          </NavLink>
        </nav>
        <Outlet context={{hostVan}}/>
      </div>
    </section>
  )
}