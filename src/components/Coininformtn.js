import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { HistoricalChart } from '../config.js/api';
import { Box, CircularProgress, ThemeProvider, createTheme, styled } from '@mui/material';
import { Chart, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const ContainerclassCI = styled(Box)(({ theme }) => ({
  width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
}));

const Coininformtn = ({coin}) => {

  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  const fetchHistoricData = async () => {

    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <ContainerclassCI>
      {!historicData ? (
          <CircularProgress
            sx={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) :(
          <>
            <Line 
            data = {{
              labels : historicData.map(coin => {
                let date = new Date(coin[0])
                let time = date.getHours() > 12 ?
                    `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`
                    return days===1 ? time : date.toLocaleDateString()    
                  }),
                  
                  datasets : [{
                    data : historicData.map(coin => coin[1]),
                    label : `price ( Past ${days} days) in ${currency}`,
                    borderColor : "#EEBC1D"
                  }]
                }}
            
            options = {{
              elements : {
                point : {
                  radius : 1,
                },
              },
            }}
            />
          </>
          
        )
        }
      </ContainerclassCI>
    </ThemeProvider>
  )
}

export default Coininformtn