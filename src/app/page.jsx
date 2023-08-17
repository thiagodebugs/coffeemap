"use client";

import { Box, Button, Container, TextField, Link } from "@mui/material";
import NextLink from "next/link";
import { Footer, Logo } from "@/components";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const [values, setValues] = useState({ email: "", password: "" });
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      router.push("/home");
    } catch (error) {
      alert(error.message);
      setValues({ email: "", password: "" });
    }
  };
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
