import { Link } from "react-router-dom";
import React from "react";
import VansDetail from "./VansDetail.jsx";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanAll = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img
          src={van.imageUrl}
          alt={`Image of the ${van.name}`}
          aria-label={`View details for ${van.name} priced at $${van.prce} per day`}
        />
        <div className="van-info">
          <p>{van.name}</p>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van.type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore your vans</h1>
      <div className="van-list">{vanAll}</div>
    </div>
  );
}
