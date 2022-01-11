import React from "react";
import "./styles.css";

const Index = (props) => {
  return (
    <div className="panels interfaceSelection">
      <h2>Interface Selection</h2>
      <div className="selectDiv">
        <label>Interface</label>
        <select name="interfaceSelection">
          {props.interfaces.map((value, index) => {
            return <option key={index} label={value} value={value} />;
          })}
        </select>
      </div>
    </div>
  );
};

export default Index;
