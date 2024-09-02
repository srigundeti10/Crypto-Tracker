/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {CoinList} from '../config.js/api';
import {CryptoState} from '../CryptoContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, LinearProgress, CircularProgress,Table, TableContainer, TableHead, TableRow, TextField, Typography , TableCell, TableBody} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
// import {styled} from '@emotion/styled';

// const TxtfldCoinTbl = styled( TextField)`
//   width: 30rem;`;
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinTable = () => {

  let navigate = useNavigate();

  const [coins, setCoins] = useState([]);
      const [loading, setLoading] = useState(false);
      const {currency,symbol} = CryptoState();
      const [search, setSearch] = useState('');
      const [page, setpage] = useState(1)

      const fetchcoins = async () => {
        setLoading(true);
        const {data} = await axios.get(CoinList(currency))

        setCoins(data);
        setLoading(false);
      };

      // console.log(coins)

      useEffect(() => {
        fetchcoins();
      }, [currency]);

      const darktheme = createTheme({
        palette: {
            primary: {main: '#fff'},
            mode: 'dark',
        },
    });

    const handleSearch = () => {
      return coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
    }

  return (
    <ThemeProvider theme={darktheme}>
      <Container 
      style={{textAlign:'center'}}>
        <Typography
        variant='h4'
        style={{margin:18}}>
          CryptoCurrency Prices by Market
        </Typography>

        <TextField 
        variant='outlined' 
        label='search for crypto'
        // sx={{ width: '30rem' }}
        
        onChange={(e)=>setSearch(e.target.value)}/>

        <TableContainer>
          {
            loading ? (
              <CircularProgress style={{backgroundColor:'aquamarine'}}/>
            ):(
              <Table>
                <TableHead>
                  <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap","chart"].map((head) => (
                    <TableCell
                    style={{
                      color: "aquamarine",
                    }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                      width={head === "Coin" ? "30%" : ""}
                    >
                      {head}
                    </TableCell>
                  ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => navigate(`/coin/${row.id}`)}
                         key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "aquamarine" : "#E0115F",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              </Table>
            )
          }
        </TableContainer>
          <Stack>
            <Pagination
            style={{
              display:'flex',
              justifyContent:'center',
              padding:20,
            }}
            variant="outlined" shape="rounded" size="large"
            count={(handleSearch()?.length/10).toFixed(0)}
            onChange={(_,value)=>{
              setpage(value)
              window.scroll(0,0)
            }}
            />
          </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default CoinTable;