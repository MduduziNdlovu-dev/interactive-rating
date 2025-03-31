'use client'

import React, { useState } from 'react'
import RatingButton from './RatingButton'
import { Box } from '@mui/material'

const RatingsButtons = () => {
    const [selected, setSelected] = useState(1)

    const buttons = [1, 2, 3, 4, 5]
  return <Box sx={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    }}>
  {buttons.map((button) => (
        <RatingButton 
            rating={button} 
            key={button} 
            selectedRating={selected}
            setSelected={setSelected}/>
    ))}
  </Box>
}

export default RatingsButtons