import { React } from "react";
import PlantCard from "./PlantCard";

function PlantList({ displayedPlants }) {
  return (
    <ul className="cards">
      {displayedPlants.map((plant) => (
        <PlantCard plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
