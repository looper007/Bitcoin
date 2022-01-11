import React from "react";
import "./styles.css";
const Index = (props) => {
  return (
    <div className="panels">
      <h2>Translation Values</h2>
      <table>
        <thead>
          <tr>
            <th>Lookup Value</th>
            <th>Return Value</th>
            <th>Product Group ID</th>
            <th>Last User </th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {props.TranslationValues.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.lookupvalue}</td>
                <td>{value.returnvalue}</td>
                <td>{value.productgroupid}</td>
                <td>{value.lastuser}</td>
                <td>{value.lastupdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="operationsButtonsTable">
        <div>
          <button>Add</button>
          <button>Delete</button>
        </div>
        <div>
          <button>Save</button>
          <button>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
