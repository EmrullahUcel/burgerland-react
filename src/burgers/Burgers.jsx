import "./Burgers.css";
import Data from "../Data/Data";
function Burgers({ title, description, image, price, data, setItem }) {
  function addBurger(event) {
    event.preventDefault(), setItem([data, ...Data]);
    console.log(...Data);
  }

  return (
    <div className="burgers">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <button onClick={addBurger}>Sepete Ekle</button>
    </div>
  );
}

export default Burgers;
