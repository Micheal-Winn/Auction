import { Box, Typography } from "@mui/material";
import React from "react";

const CarouselComponent = ({ items }) => {
  return (
    <Box
      color={"primary.main"}
      width={"100%"}
      minHeight={"100vh"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      overflow="hidden"
      sx={{
        backgroundImage: `url(${items.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <Typography variant="h2" fontWeight={"bold"} color="common.white">
        {items.name}
      </Typography>
    </Box>
  );
};

export default CarouselComponent;
