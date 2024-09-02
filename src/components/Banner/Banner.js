import { Container, Typography } from '@mui/material'
import React from 'react'
import './Banner.css'
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className='banner'>
        <Container className='bannercontent'>
            <div className='tagline'>
                <Typography 
                variant='h2'
                style={{
                    color:'#E0115F',
                    fontWeight:'bold',
                    marginBottom: 20
                }}>
                    Crypto Tracker
                </Typography>
                <Typography 
                variant='subtitle2'
                style={{
                    color:'darkgray',
                    textTransform:'capitalize'
                }}
                >
                    Lorem dolor sit amet consectetur adipisicing.
                </Typography>
            </div>
            <Carousel/>
        </Container>
    </div>
  )
}

export default Banner