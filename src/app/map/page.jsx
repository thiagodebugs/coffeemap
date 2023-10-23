"use client";

import { Navbar } from "@/components";
import { Box, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function Map() {
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

  return (
    <>
      <Navbar option="map">
        <Box>
          {/* <MapContainer
            center={position}
            zoom={13}
            style={{
              height: "80vh",
              width: "100%",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {devices.map((device, index) => (
              <Marker
                key={index}
                position={[device.latitude, device.longitude]}
              >
                <Popup>
                  <Typography variant="body1" fontWeight="bold">
                    {device.name}
                  </Typography>
                  <Typography variant="body1" margin="0">
                    {device.description}
                  </Typography>
                </Popup>
              </Marker>
            ))}
          </MapContainer> */}
        </Box>
      </Navbar>
    </>
  );
}
