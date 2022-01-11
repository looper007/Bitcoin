import React from "react";
import "./styles.css";

const Index = (props) => {
  return (
    <div className="panels">
      <h2>Translation Tables</h2>
      <table>
        <thead>
          <tr>
            <th>Translation</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.TranslationTables.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.Translation}</td>
                <td>{value.Name}</td>
                <td>{value.Description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
