import React from 'react'
import RatingButton from './RatingButton'

const RatingsButtons = () => {
    const buttons = [1, 2, 3, 4, 5]
  return <>
  {buttons.map((button) => (
        <RatingButton label={button} key={button}/>
    ))}
  </>
}

export default RatingsButtons