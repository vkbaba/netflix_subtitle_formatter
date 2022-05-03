import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" style={{ background: '#26325e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mx: "auto" }}>
            Netflix Subtitile Formatter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}