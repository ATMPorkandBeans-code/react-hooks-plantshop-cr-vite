import { useState, React } from "react";

function PlantCard(plant) {
  const [inStock, setInStock] = useState(true);

  function handleClick() {
    setInStock((prevState) => !prevState);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.plant.image} alt={plant.plant.name} />
      <h4>{plant.plant.name}</h4>
      <p>Price: {plant.plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
