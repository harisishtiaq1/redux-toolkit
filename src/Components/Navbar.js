import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <AppBar
    sx={{
        backgroundColor: "brown",
      }}>
        <Toolbar>
            <Typography>
                My Redux Task
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar