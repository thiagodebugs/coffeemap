"use client";

import { MapView, Navbar } from "@/components";
import { Box } from "@mui/material";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function MapPage() {
  const position = [-11.85385, -55.51208];
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
