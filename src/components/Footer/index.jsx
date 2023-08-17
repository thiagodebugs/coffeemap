import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright &copy; {new Date().getFullYear()} CoffeMap.
    </Typography>
  );
}
