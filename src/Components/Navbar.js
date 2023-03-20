import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Posts from "./Posts";

function Navbar() {
  return (
    <>
    <AppBar
      sx={{
        backgroundColor: "brown",
      }}
    >
      <Toolbar>
        <Typography>My Redux Task</Typography>
      </Toolbar>
    </AppBar>
    <Posts/>
    </>
  );
}

export default Navbar;
