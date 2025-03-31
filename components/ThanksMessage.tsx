'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface ThanksMessageProps {
  rating: number | null;
}

const ThanksMessage = ({ rating }: ThanksMessageProps) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
        
    }}>

      <Image
        src="/images/illustration-thank-you.svg"
        alt="thank you illustration"
        height={108}
        width={162}
      />

      <Box sx={{
        backgroundColor: "#262E38",
        borderRadius: "1.4063rem",
        padding: "0.5rem 1rem",
        margin: "2rem 0",
      }}>
        <Typography variant="h5" sx={{ 
          color: "#FC7614"
        }}>
          You selected {rating} out of 5
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ color: "#FFFFFF", fontWeight: 600, fontSize: "2rem" }}>
        Thank You!
      </Typography>

      <Typography variant="body1" sx={{ color: "#969FAD", textAlign: "center", margin: "1.5rem" }}>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </Typography>
    </Box>
  )
}

export default ThanksMessage;
