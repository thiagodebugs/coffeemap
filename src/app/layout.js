import { CssBaseline } from "@mui/material";

export const metadata = {
  title: "CoffeeMap",
  description: "Saiba exatamente onde esta a sua maquina de café!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <CssBaseline />
      <body>{children}</body>
    </html>
  );
}
