"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
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
  const supabase = createClientComponentClient();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const { data, error } = await supabase.from("devices").select("*");

        if (error) throw error;

        setDevices(data);
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    };

    fetchDevices();
  }, []);

  return (
    <>
      <Navbar>
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
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  title={device.name}
                  description={device.coordinate}
                  image={`https://source.unsplash.com/random/?coffe=${device.id}`}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Navbar>
    </>
  );
}
