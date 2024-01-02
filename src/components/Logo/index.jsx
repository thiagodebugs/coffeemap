import { Box, Typography } from "@mui/material";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

export default function Logo({ variant }) {
  return (
    <>
      <Typography
        variant={variant || "h3"}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <CoffeeMakerIcon fontSize="inherit" />
        CoffeeMap
      </Typography>
    </>
  );
}
