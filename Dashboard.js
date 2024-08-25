// src/components/Dashboard.js

import React from "react";

const Dashboard = ({ holdings }) => {
  return (
    <div className="dashboard">
      <h2>Your Holdings</h2>
      <table>
        <thead>
          <tr>
            <th>Stock Symbol</th>
            <th>Quantity</th>
            <th>Current Price</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding) => (
            <tr key={holding.stockSymbol}>
              <td>{holding.stockSymbol}</td>
              <td>{holding.quantity}</td>
              <td>{holding.currentPrice}</td>
              <td>{holding.quantity * holding.currentPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
