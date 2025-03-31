import { Button } from '@mui/material'
import React from 'react'

interface RatingButtonProps {
    label: number ;
}

const RatingButton = ({label} : RatingButtonProps) => {
    
  return (
    <Button>{label}</Button>
  )
}

export default RatingButton