import { Box, Grid } from "@mui/material";
import React from "react";
import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";

export default function Design() {
  return (
    <div>
      <TopBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={2} lg={1}>
            <NavBar />
          </Grid>
          <Grid item xs={9} md={10} lg={11}>
            <p>as</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
