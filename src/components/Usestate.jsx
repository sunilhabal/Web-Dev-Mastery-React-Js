import { useState } from "react";

const Usestate = () => {
  let [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
    console.log(`added value = ${value}`);
  };

  const handleRemove = () => {
    setValue(value - 1);
    console.log(`removed value = ${value}`);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Usestate;
