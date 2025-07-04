import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" sx={{ borderRadius: '10px', marginBottom: '1rem' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        URL Shortener
      </Typography>
      <Button color="inherit" component={Link} to="/">Shorten</Button>
      <Button color="inherit" component={Link} to="/stats">Statistics</Button>
    </Toolbar>
  </AppBar>
);

export default Header;