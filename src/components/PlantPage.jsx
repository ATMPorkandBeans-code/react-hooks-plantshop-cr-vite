import { useState, useEffect, React } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to retrieve info");
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data);
      })
      .catch((e) => setError(e.message));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedPlants = search ? filteredPlants : plants;

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList displayedPlants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
