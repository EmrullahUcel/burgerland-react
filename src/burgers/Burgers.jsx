import "./Burgers.css";
import Data from "../Data/Data";
function Burgers({ title, description, image, price, data, setItem, key }) {
  function addBurger() {
    setItem([...Data, data]);
    console.log(...Data);
    console.log(key);
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
