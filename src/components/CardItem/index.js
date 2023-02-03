// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <div className="image-container">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default Card
