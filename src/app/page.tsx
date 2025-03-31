import { Box } from "@mui/material";
import RatingsContainer from "../../components/RatingsContainer";

export default function Home() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      padding:'2rem',
    }}>
      <RatingsContainer />
      
    </Box>
  );
}
