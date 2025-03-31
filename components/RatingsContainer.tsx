'use client'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import RatingsButtons from './RatingsButtons'
import ThanksMessage from './ThanksMessage'

const RatingsContainer = () => {
    const [submitted, setSubmitted] = useState(false);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    return (
        <Box sx={{
            backgroundColor: "#232A34",
            padding: "2rem",
            width: "25.75rem",
            height: "26rem",
            borderRadius: "1.875rem",
        }}>
            {submitted ? ( 
                <ThanksMessage rating={selectedRating} />  // ✅ Pass selected rating
            ) : ( 
                <> 
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
                            src="/images/icon-star.svg"
                            alt="star logo"
                            height={16}
                            width={16}
                        />
                    </Box>

                    <Typography variant="h2" sx={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                    }}>
                        How did we do?
                    </Typography>

                    <Typography variant="body1" sx={{
                        color: "#969FAD",
                        margin: "1.5rem 0"
                    }}>
                        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                    </Typography>

                    <RatingsButtons setSelectedRating={setSelectedRating} /> {/* ✅ Pass setter */}

                    <Button sx={{
                        backgroundColor: selectedRating !== null ? "#FC7614" : "#555", // Disable if not selected
                        color: "#131518",
                        fontWeight: 600,
                        borderRadius: "1.4063rem",
                        fontSize: "1.125rem",
                        width: "100%",
                        height: "3rem",
                        marginTop: "2rem",
                        padding: "0.75rem",
                        "&:hover": {
                            backgroundColor: selectedRating !== null ? "#FFFFFF" : "#555"
                        },
                    }}
                    disabled={selectedRating === null} 
                    onClick={() => setSubmitted(true)}
                    >
                        Submit
                    </Button> 
                </>
            )}
        </Box>
    );
}

export default RatingsContainer;
