"use client";

import { Card, Navbar } from "@/components";
import { Search } from "@mui/icons-material";
import {
  Container,
  Divider,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {};
    fetchDevices();
  }, []);

  return (
    <>
      <Navbar option="home">
        <Container>
          <TextField
            fullWidth
            placeholder="Pesquisar..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Container>
        <Divider sx={{ my: "20px" }} />
        <Container>
          <Grid container spacing={2}>
            {devices.map((device, index) => (
              <>
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    device={device}
                    image={`https://source.unsplash.com/random/?coffe=${device.id}`}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </Navbar>
    </>
  );
}
