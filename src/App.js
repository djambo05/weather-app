import { AppHeader } from "./Components/AppHeader";
import { Typography } from "@mui/material";
import Modal from "./Components/Modal";
import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  //https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=de9ddf67504f64bc6826beba0df4bb42
  return (
    <div>
      <AppHeader handleOpen={handleOpen} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
          height: "100vh",
          width: "100%",
        }}
      >
        <Typography variant="h4" color={"white"}>
          To check the weather click Menu Button, please...
        </Typography>
      </div>
      <Modal open={open} />
    </div>
  );
}

export default App;
