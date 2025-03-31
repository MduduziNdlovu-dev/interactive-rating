'use client'

import { Button } from '@mui/material'
import React, { useState } from 'react'

interface RatingButtonProps {
    rating: number ;
    setSelected: (arg1 : number) => void;
    selectedRating: number;
}

const RatingButton = ({rating, setSelected, selectedRating} : RatingButtonProps) => {
    
  return (
    
        <Button sx={{
        backgroundColor: rating === selectedRating ? "#ffffff" : "#262E38",
        color: rating === selectedRating ? "#262E38" : "#969fad",
        borderRadius: "50%",
        width: "3rem",
        height: "4rem",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: "#FC7614",
            color: "#262E38",
            fontSize: "1.125rem",
        }
            }}
        onClick={() => setSelected(rating)}    
        >
            {rating}
        </Button>
    
    
  )
}

export default RatingButton