"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function FormDialog({ open: openDialog, handleClose, device }) {
  const supabase = createClientComponentClient();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(device);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleUpdateDateDevice = async () => {
    try {
      const { error } = await supabase
        .from("devices")
        .update({
          name: value.name,
          description: value.description,
        })
        .eq("id", value.id);

      if (error) throw error;

      alert("Dispositivo atualizado com sucesso!");
      handleClose();
    } catch (error) {
      alert(error.message);
      handleClose();
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent sx={{ paddingTop: "10px !important" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                value={value.name}
                onChange={(event) => {
                  setValue({ ...value, name: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descrição"
                value={value.description}
                onChange={(event) => {
                  setValue({ ...value, description: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              Coordenada: {value.coordinate}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleUpdateDateDevice}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
