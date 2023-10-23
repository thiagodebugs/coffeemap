"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Typography from "@mui/material/Typography";
import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map({ position, devices }) {
  return (
    <MapContainer
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
        <Marker key={index} position={[device.latitude, device.longitude]}>
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
    </MapContainer>
  );
}
