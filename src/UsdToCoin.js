import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState();
  const [myCoin, setMyCoin] = useState();
  const writeDollar = (e) => {
    setDollar(e.target.value);
  }
  const changeCoin = (e) => {
    setMyCoin(e.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });

  }, [])
  return (
    <div>
      <h1>the coins! ({coins.length})</h1>
        {loading ? (
          null
        ) : (
          <div>
            <span>내가 가진 달러 </span>
            <input 
              onChange={writeDollar}
              value={dollar}
              type="text" 
              placeholder='write dollar'
            />
        </div>
        )}
      {loading ? (
          <strong>loading...</strong>
        ) : (
        <select onChange={changeCoin}>
          {coins.map((coin, index) => (
            <option 
              key={index}
              value={coin.quotes.USD.price}
            >
              {coin.name} ({coin.symbol}) : ${(coin.quotes.USD.price).toFixed(2)}
            </option>
            ))}
        </select>
      )}
      <p>내가 살 수 있는 코인 
        <strong>
          {myCoin > 0 ? (dollar/ myCoin).toFixed(2) : "0"}
        </strong>
      </p>
    </div>
  )
}

export default App;
