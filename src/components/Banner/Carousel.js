/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { TrendingCoins } from '../../config.js/api'
import {CryptoState} from '../../../src/CryptoContext';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Link} from 'react-router-dom';
import './Banner.css'



// export function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

const Carousel = () => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  const [trending, settrending] = useState([]);
  const {currency,symbol} = CryptoState();

  const fetchtrendcoins = async () => {
    const {data} = await axios.get(TrendingCoins(currency))
    settrending(data);
  };
  
  console.log(trending);
  
  useEffect(() => {
    fetchtrendcoins();
  }, [currency]);

  let items = trending.map((coin) => {
    
    let profit = coin.price_change_percentage_24h > 0;

    return (<Link
    className='carousel-item'
      to={`/coin/${coin.id}`}>
        <img
        src={coin.image}
        alt={coin.name}
        height={100}
        style={{marginBottom:'10px',marginTop:'10px'}}
        />
        <span>
          {coin.symbol}
          &nbsp;
          <span
          style={{
            color: profit ? 'blue' : 'red',
            fontWeight: 'bold',
            textDecoration:'none'
          }}
          >{profit && '+'}{coin.price_change_percentage_24h?.toFixed(2)}%</span>
        </span>
        <span style={{ fontSize: 22, fontWeight: '500' ,marginBottom:'1rem'}}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>);
      
  })

  let responsive = {
    0: { items: 1 },
    239:{items:2},
    568: { items: 4 },
  }

  return (

    <div
    style={{
      height:'50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <AliceCarousel 
      mouseTracking
      infinite
      disableButtonsControls
      disableDotsControls
      autoPlayInterval={800}
      animationDuration={1000}
      responsive={responsive}
      autoPlay
      items={items}
      />
      </div>
  )
}

export default Carousel