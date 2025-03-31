import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import RatingsButtons from './RatingsButtons'

const RatingsContainer = () => {
  return (
    <Box sx={{
        backgroundColor: "#232A34",
        padding: "2rem",
        width: "25.75rem",
        height: "26rem",
        borderRadius: "1.875rem",
    }}>
        <Box sx={{
            backgroundColor: "#262E38",
            borderRadius:"50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "3rem",
            width: "3rem",
        }}>
            <Image 
                src="images\icon-star.svg"
                alt='star logo'
                height={16}
                width={16}
            />

            
        </Box>
        <Typography variant='h2' sx={{
            fontSize: "2rem",
            fontWeight: 600,
            color: "#FFFFFF",
            
        }}>
            How did we do?                
        </Typography>
        
        <Typography variant='body1' sx={{
            color: "#969FAD",
        }}>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Typography>

        <RatingsButtons/>
    </Box>
  )
}

export default RatingsContainer