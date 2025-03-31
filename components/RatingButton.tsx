'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'

interface RatingButtonProps {
    rating: number;
    setSelectedRating: (rating: number) => void;
}

const RatingButton = ({ rating, setSelectedRating }: RatingButtonProps) => {
    const [selected, setSelected] = useState(false);

    return (
        <Button sx={{
            backgroundColor: selected ? "#ffffff" : "#262E38",
            color: selected ? "#262E38" : "#969fad",
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
        onClick={() => {
            setSelectedRating(rating);
            setSelected(true);
        }}>
            {rating}
        </Button>
    )
}

export default RatingButton;
