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

const devices = [
  {
    id: 1,
    name: "Device1",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 2,
    name: "Device2",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 3,
    name: "Device3",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 4,
    name: "Device4",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 5,
    name: "Device5",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 6,
    name: "Device6",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 7,
    name: "Device7",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 8,
    name: "Device8",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 9,
    name: "Device9",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
  {
    id: 10,
    name: "Device10",
    status: "Online",
    coordinate: "-11.823163, -55.521639",
  },
];

export default function Home() {
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
              <Grid item xs={4} key={index}>
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
