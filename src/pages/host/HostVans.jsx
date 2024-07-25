import { Link } from "react-router-dom"
import React from "react"

export default function HostVans() {
  
  const [ hostVans, SetHostVans ] = React.useState([])
  
  React.useEffect(() => {
    fetch('/api/host/vans')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network Response was NOT ok')
        }
        return res.json()
      })
      .then(data => SetHostVans(data.vans))
      .catch(error => console.error("Error: ", error))
  }, [])
  
  const hostVanElements = hostVans.map(van => (
    <Link
      key={van.id}
      to={`/host/vans/${van.id}`}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))
  
  return (
    <section>
      <h3 className="host-vans-title">Your Listed Vans</h3>
      <div className="host-vans-list">
        {
          hostVans.length > 0 ? (
            <section>
              {hostVanElements}
            </section>
          )
          : (
            <h2>Loading...</h2>
          )
        }
      </div>
    </section>
  )
}