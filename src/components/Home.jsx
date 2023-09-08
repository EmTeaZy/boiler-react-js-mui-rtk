import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">TZ's boiler plate app</Typography>
    </Box>
  );
};

export default Home;
