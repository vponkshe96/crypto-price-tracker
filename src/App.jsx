import { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";
import Coin from "./components/Coin/Coin";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false"
      )
      .then((res) => res.data)
      .then((data) => setCoins(data))
      .catch((err) => console.log(`ERROR ${err}`));
  }, []);

  return (
    <div>
      <div className="coinSearch">
        <h1>Crypto Coin Tracker</h1>
        <input
          type="text"
          placeholder="Enter crypto coin name.."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="coinContainer">
        <table>
          <tr>
            <th>Logo</th>
            <th>Coin Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Daily Change</th>
            <th>Market Cap</th>
          </tr>
          {coins
            .filter((coin) => {
              return coin.name.toLowerCase().includes(query.toLowerCase());
            })
            .map((coin) => (
              <Coin
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            ))}
        </table>
      </div>
    </div>
  );
};
export default App;
