'use client'
import React from 'react'
import RatingButton from './RatingButton'
import { Box } from '@mui/material'

interface RatingsButtonsProps {
    setSelectedRating: (rating: number) => void;
}


const RatingsButtons = ({ setSelectedRating } : RatingsButtonsProps) => {
    const ratings = [1, 2, 3, 4, 5];

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
        }}>
            {ratings.map((rating) => (
                <RatingButton 
                    key={rating} 
                    rating={rating} 
                    setSelectedRating={setSelectedRating} 
                />
            ))}
        </Box>
    );
}

export default RatingsButtons;
