// src/components/StockTrading.js

import React, { useState } from "react";

const StockTrading = ({ onTrade }) => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [tradeType, setTradeType] = useState("buy");

  const handleTrade = () => {
    onTrade({ stockSymbol, quantity: parseInt(quantity), tradeType });
    setStockSymbol("");
    setQuantity(0);
  };

  return (
    <div className="stock-trading">
      <h2>Trade Stocks</h2>
      <input
        type="text"
        placeholder="Stock Symbol"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <select
        value={tradeType}
        onChange={(e) => setTradeType(e.target.value)}
      >
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
      <button onClick={handleTrade}>Execute Trade</button>
    </div>
  );
};

export default StockTrading;
