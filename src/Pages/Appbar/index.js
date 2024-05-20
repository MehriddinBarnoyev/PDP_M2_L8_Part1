// ButtonAppBar.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TemplateWrapperAppBar from './TeempleteWrapperAppBar';

export default function ButtonAppBar() {
  return (
    <TemplateWrapperAppBar>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Femmecubator
          </Typography>
          <Button color="inherit">Listings</Button>
          <Button color="inherit">Mentors</Button>
          <Button color="inherit">My account</Button>
          <Button color="inherit" className='me-5'>Log out</Button>
        </Toolbar>
      </AppBar>
    </TemplateWrapperAppBar>
  );
}
