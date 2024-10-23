import "./Bottle.css";
import PropTypes from "prop-types";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, seller } = bottle;
  console.log(bottle);
  return (
    <div className="bottle_card">
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <img src={img} alt="" />
      <h4>Brand: {seller}</h4>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Bottle;
