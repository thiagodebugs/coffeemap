"use client";

import {
  Box,
  Button,
  Container,
  TextField,
  Link,
  Fade,
  LinearProgress,
} from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Footer, Logo } from "@/components";

export default function Home() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true);

    const { email, password } = values;

    try {
    } catch (error) {
    } finally {
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "2px" }}>
        <Fade in={loading}>
          <LinearProgress />
        </Fade>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "95vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Logo variant="h3" />
        </Box>
        <Container
          component="form"
          maxWidth="xs"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="normal"
            value={values.email}
            required
            onChange={(event) =>
              setValues({ ...values, email: event.target.value })
            }
          />
          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            required
            value={values.password}
            onChange={(event) =>
              setValues({ ...values, password: event.target.value })
            }
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
