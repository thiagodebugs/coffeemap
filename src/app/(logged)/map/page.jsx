"use client";

import { MapView, Navbar } from "@/components";
import { Box } from "@mui/material";

import { useEffect, useState } from "react";

export default function MapPage() {
  const position = [-11.85385, -55.51208];
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {};

    fetchDevices();
  }, []);

  //if window is undefined, we are on the server
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      <Navbar option="map">
        <Box>
          {devices.length > 0 && (
            <MapView position={position} devices={devices} />
          )}
        </Box>
      </Navbar>
    </>
  );
}
