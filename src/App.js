import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [stocks, setStocks] = useState([]);
  const [newStock, setNewStock] = useState({
    name: '',
    ticker: '',
    quantity: 0,
    buyPrice: 0
  });

  const [portfolioValue, setPortfolioValue] = useState(0);

  // Fetch all stocks on initial load
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/stocks/all').then((response) => {
      setStocks(response.data);
    });

    // Get portfolio value
    axios.get('http://127.0.0.1:5000/api/stocks/portfolio-value').then((response) => {
      setPortfolioValue(response.data.portfolioValue);
    });
  }, [stocks]);

  // Handle form submission to add a stock
  const handleAddStock = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:5000/api/stocks/add', newStock)
      .then((response) => {
        setStocks([...stocks, newStock]);
        setNewStock({ name: '', ticker: '', quantity: 0, buyPrice: 0 });
      });
  };

  return (
    <div className="App">
      <h1>Portfolio Tracker</h1>

      <form onSubmit={handleAddStock}>
        <input
          type="text"
          placeholder="Stock Name"
          value={newStock.name}
          onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ticker"
          value={newStock.ticker}
          onChange={(e) => setNewStock({ ...newStock, ticker: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newStock.quantity}
          onChange={(e) => setNewStock({ ...newStock, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Buy Price"
          value={newStock.buyPrice}
          onChange={(e) => setNewStock({ ...newStock, buyPrice: e.target.value })}
        />
        <button type="submit">Add Stock</button>
      </form>

      <h2>Total Portfolio Value: ${portfolioValue}</h2>

      <h3>Stock Holdings:</h3>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.name} ({stock.ticker}): {stock.quantity} shares @ ${stock.buyPrice} each
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
