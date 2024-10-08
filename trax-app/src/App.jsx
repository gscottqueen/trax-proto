import { useState } from "react";

function MaterialItem({ formData, handleChange, index }) {
  const handleItemChange = (e) => {
    handleChange(e);
  };

  return (
    <fieldset>
      <legend>Material Item {index + 1}</legend>
      <label>
        Type:
        <input
          type="text"
          name={`type-${index}`}
          id={`type-${index}`}
          value={formData.get(`type_${index}`) || ""}
          onChange={handleItemChange}
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          name={`quantity-${index}`}
          id={`quantity-${index}`}
          value={formData.get(`quantity_${index}`) || 0}
          onChange={handleItemChange}
        />
      </label>
    </fieldset>
  );
}

const App = () => {
  const [formData, setFormData] = useState(new FormData());
  const [materialItems, setMaterialItems] = useState([0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = new FormData();
    for (const [key, val] of formData) {
      newFormData.append(key, val);
    }
    newFormData.set(name, value);
    setFormData(newFormData);
  };

  const handleAddNewMaterial = () => {
    setMaterialItems((prevMaterialItems) => [
      ...prevMaterialItems,
      prevMaterialItems.length,
    ]);
  };
  s;
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {materialItems.map((index) => (
        <MaterialItem
          key={index}
          formData={formData}
          handleChange={handleChange}
          index={index}
        />
      ))}
      <br />
      <button type="button" onClick={handleAddNewMaterial}>
        Add New Material +
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
