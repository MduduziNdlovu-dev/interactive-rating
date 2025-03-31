import { Button } from '@mui/material'
import React from 'react'

interface RatingButtonProps {
    label: number ;
}

const RatingButton = ({label} : RatingButtonProps) => {
    
  return (
    
        <Button sx={{
        backgroundColor: "#262E38",
        color: "#969fad",
        borderRadius: "50%",
        width: "3rem",
        height: "4rem",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: "#FC7614",
            color: "#262E38",
            fontSize: "1.125rem",
        }
            }}>{label}</Button>
    
    
  )
}

export default RatingButton