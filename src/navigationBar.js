import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}