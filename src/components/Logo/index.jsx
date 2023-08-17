import { Box, Typography } from "@mui/material";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

export default function Logo() {
  return (
    <>
      <Typography variant="h3" sx={{ display: "flex" }}>
        <CoffeeMakerIcon fontSize="inherit" />
        CoffeMap
      </Typography>
    </>
  );
}
