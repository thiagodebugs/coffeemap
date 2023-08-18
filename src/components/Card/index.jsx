import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { DialogEditDevice } from "@/components";
import Link from "@mui/material/Link";
import NextLink from "next/link";

export default function MyCard({ device, image }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {device.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link
              target="_blank"
              href={`https://www.google.com/maps/search/?api=1&query=${device.coordinate}`}
              component={NextLink}
            >
              {device.coordinate}
            </Link>
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button startIcon={<EditIcon />} onClick={handleOpen}>
            Editar
          </Button>
        </CardActions>
      </Card>
      <DialogEditDevice open={open} handleClose={handleClose} device={device} />
    </>
  );
}
