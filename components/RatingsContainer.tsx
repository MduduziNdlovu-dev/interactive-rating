import { Box, Button, Typography } from '@mui/material'
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
            marginBottom: "1.875rem"
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
            margin: "1.5rem 0"
        }}>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Typography>

        <RatingsButtons/>

        <Button sx={{
            backgroundColor: "#FC7614",
            color: "#131518",
            fontWeight: 600,
            borderRadius: "1.4063rem",
            fontSize: "1.125rem",
            width: "100%",
            height: "3rem",
            marginTop: "2rem",
            padding: "0.75rem",
            "&:hover": {
                backgroundColor: "#FFFFFF"
            },
        }}>
            Submit
        </Button>
    </Box>
  )
}

export default RatingsContainer