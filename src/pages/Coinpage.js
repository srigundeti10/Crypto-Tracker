import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../config.js/api';
import { styled } from '@mui/material/styles';
import Coininformtn from '../components/Coininformtn';
import { Typography,LinearProgress } from '@mui/material';

// const style = (theme) => ({
//   container: {
//     display: 'flex',
//     [theme.breakpoints.down('md')]: {
//       flexdirection: 'column',
//       alignItems: 'center',
//     },
//   }
// })

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Containerclass = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  overflow: 'hidden',
}));

const Sidebarclass = styled('div')(({ theme }) => ({
  width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
}));

const Descriptionclass = styled(Typography)(({ theme }) => ({
  width: "100%",
  padding: 55,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
}));

const Headingclass = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: 20,
}));

const Marketdata = styled('div')(({ theme }) => ({
  alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",

        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "start",
      },
}));




const Coinpage = () => {

  const {id} = useParams();
  const [coin, setcoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setcoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Containerclass>
      <Sidebarclass>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />

        <Headingclass>
          {coin?.name} ({coin?.symbol.toUpperCase()})
        </Headingclass>

        <Descriptionclass>
        {(coin?.description.en.split(". ")[0])}.
        </Descriptionclass>

        <Marketdata>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex"}}>
            <Typography variant="h6">
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h6"
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5">
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
            </Typography>
          </span>
        </Marketdata>
        
      </Sidebarclass>
      <Coininformtn coin = {coin}/>
    </Containerclass>
  )
}

export default Coinpage