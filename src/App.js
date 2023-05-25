import { AppHeader } from "./Components/AppHeader";
import { Typography } from "@mui/material";
import Modal from "./Components/Modal";
import React, { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChangeCity = (city) => setCity(city);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de9ddf67504f64bc6826beba0df4bb42`
    )
      .then((res) => res.json())
      .then((data) => setTemp((data.main.temp - 273.15).toFixed(1)))
      .catch((err) => console.error("Error"));
  }, [city]);

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
      <Modal
        open={open}
        handleClose={handleClose}
        handleOnChangeCity={handleOnChangeCity}
        temp={temp}
      />
    </div>
  );
}

export default App;
