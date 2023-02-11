import "./coin.css";

const Coin = ({ image, name, symbol, price, priceChange, marketCap }) => {
  return (
    <tr>
      <td>
        <img src={image} alt="crypto coin" />
      </td>
      <td>
        <h1> {name}</h1>
      </td>
      <td>
        <p className="symbol">{symbol}</p>
      </td>
      <td>
        <p className="coinPrice">${price.toLocaleString()}</p>
      </td>
      <td>
        {/* Optimize this */}
        {priceChange < 0 ? (
          <p className="coinPriceChangeRed">{priceChange.toFixed(2)}% </p>
        ) : (
          <p className="coinPriceChangeGreen">{priceChange.toFixed(2)}% </p>
        )}
      </td>
      <td>
        <p className="coinmarketCap">${marketCap.toLocaleString()}</p>
      </td>
    </tr>
  );
};
export default Coin;
