import React from "react";

function Keypad() {
  const handleInputChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <label>
        Password:
        <input type="password" onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default Keypad;
