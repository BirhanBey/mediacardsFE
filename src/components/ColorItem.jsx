import React from "react";

const ColorItem = ({ color, setColor }) => {
  return (
    <div>
      <div
        onClick={setColor}
        className="color-item"
        style={{ "--bg-color": color }}
      ></div>
    </div>
  );
};

export default ColorItem;
