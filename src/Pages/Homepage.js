import React from 'react'
import Coin from './Coin';
import axios from 'axios';
import {useState, useEffect} from 'react';



const Homepage = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
  
  
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C90d%2C180d%2C1y')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error));
  }, []);
  
  
  const handleChange = e => {
    setSearch(e.target.value);
  }
  
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  
  

  return (
    <div className="coin-app">
      <h1>Cryptocurrency Tracker</h1> 
      <div className="coin-search">
        <div className="coin-text">
          <form>
            <input type="text" placeholder="Search..." className="coin-input" onChange={handleChange}/>
          </form>
        </div>
        <div className="coin-container">
        <div className="coin-row">
            <div className="coin">
                <p className="coin-id">#</p>
                <h1>Name</h1>
                <p className="coin-symbol"></p>
            </div>
            
                <div className="coin-data">
                    <p className="coin-price">Price</p>
                    <p className="coin-volume">Volume</p>
                    <p className="percentage-24h">Percentage</p>
                    <p className="coin-marketcap">Marketcap</p>
                </div>
        </div>
    </div>
        {filteredCoins.map(coin => {
          return (
            <Coin 
            key={coin.id} 
            id={coin.market_cap_rank}
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}/>
          );
        })}
      </div>

    </div>
    
  )
}

export default Homepage