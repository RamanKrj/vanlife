import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
  const { hostVan } = useOutletContext()
  
  return (
    <h3 className="host-van-price">{`$ ${hostVan.price} `}<span>a day</span></h3>
  )
}