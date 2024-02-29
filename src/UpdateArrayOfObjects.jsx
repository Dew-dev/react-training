import React, { useState } from "react";

function UpdateArrayOfObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };
  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };
  const handleChangeYear = (e) => {
    setCarYear(e.target.value);
  };
  const handleChangeMake = (e) => {
    setCarMake(e.target.value);
  };
  const handleChangeModel = (e) => {
    setCarModel(e.target.value);
  };
  return (
    <div>
      <h2> list of car objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleChangeYear} />
      <input
        type="text"
        value={carMake}
        onChange={handleChangeMake}
        placeholder="car make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleChangeModel}
        placeholder="car model"
      />
      <button onClick={handleAddCar}> Add car</button>
    </div>
  );
}
export default UpdateArrayOfObjects;
