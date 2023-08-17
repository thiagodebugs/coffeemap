import { Box, Button, Container, TextField, Link } from "@mui/material";
import NextLink from "next/link";
import { Footer, Logo } from "@/components";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Logo />
        </Box>
        <Container
          component="form"
          maxWidth="xs"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Link href="#" component={NextLink} variant="body2">
            Esqueceu a senha?
          </Link>
        </Container>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
