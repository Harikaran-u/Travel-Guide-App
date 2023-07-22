import './index.css'

const TravelItem = props => {
  const {city} = props
  const {imageUrl, name, description} = city
  const item = (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="country-img" />
      <h1 className="country-name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
  return item
}

export default TravelItem
