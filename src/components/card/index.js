import "./style.css";
const Card = ({ name, image, type }) => {
  // Dynamic class assignment based on type and style
  const cardClass = type === "category" ? "card no-border" : "card card-styling";
  const imgDiv = type === "category" ? "round-card " : "square-card";
  const cardImg = type === "category" ? "card-image" : "card-img-top";
  return (
    <div className={`${cardClass}`}>
      <div className={imgDiv}>
        <img className={cardImg} src={`${image}`} alt="card" />
      </div>
      <div className="card-body">
        <p className="card-text">{name}</p>
        {type==="product" && <div className="d-flex justify-content-between price-row">
          {/* <span className="price">$149.99</span> */}
          <button className="product-card__btn">Add to Cart</button>
        </div>}
      </div>
    </div>
  );
};
export default Card;
