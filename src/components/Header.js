import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme, ThemeProvider } from '@mui/material'
import {  useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import { CryptoState } from '../CryptoContext';

const styles = {
    golColor: {
        color: 'aquamarine',
        fontWeight: 800,
        flexGrow: 1,
    },
};



const Header = () => {
    let navigate = useNavigate();

    const darktheme = createTheme({
        palette: {
            primary: {main: '#fff'},
            mode: 'dark',
        },
    });

// const [selectedValue, setSelectedValue] = useState('USD');

//     const handleChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

    const {currency,setCurrency} = CryptoState();
    console.log(currency);

  return (
      <ThemeProvider theme={darktheme}>
          <AppBar color='transparent' position='static'>
              <Container>
                  <Toolbar>
                      <Typography
                          onClick={() => navigate('/')}
                          style={styles.golColor}
                          variant='h5'>
                          Crypto Tracker
                      </Typography>

                      <Select
                          value={currency}
                          variant='outlined'  // for border
                          style={{
                              width: 100,
                              height: 40,
                              marginLeft: 15,
                              cursor: 'pointer',
                          }}
                          onChange={(e) => setCurrency(e.target.value)}>
                          <MenuItem value={"USD"}>USD</MenuItem>
                          <MenuItem value={"INR"}>INR</MenuItem>
                      </Select>
                  </Toolbar>
              </Container>
          </AppBar>
      </ThemeProvider>
  )
}

export default Header