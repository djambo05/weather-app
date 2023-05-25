import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography } from "@mui/material";

export const AppHeader = ({ handleOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#443f3f",
        width: "100vw",
        height: "80px",
      }}
    >
      <Typography variant="h3" sx={{ color: "white" }}>
        Weather App
      </Typography>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        <MenuIcon />
      </Button>
    </div>
  );
};
