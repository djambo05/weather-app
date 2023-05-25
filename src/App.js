import { AppHeader } from "./Components/AppHeader";
import { Typography } from "@mui/material";

function App() {
  //https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=de9ddf67504f64bc6826beba0df4bb42
  return (
    <div>
      <AppHeader />
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
    </div>
  );
}

export default App;
