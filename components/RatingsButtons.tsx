import React from 'react'
import RatingButton from './RatingButton'
import { Box } from '@mui/material'

const RatingsButtons = () => {
    const buttons = [1, 2, 3, 4, 5]
  return <Box sx={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    }}>
  {buttons.map((button) => (
        <RatingButton label={button} key={button}/>
    ))}
  </Box>
}

export default RatingsButtons