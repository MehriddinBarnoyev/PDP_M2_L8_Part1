import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>

          <Button color="inherit">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <MailIcon />
            </IconButton>
            <p className="mt-3">Messages</p>
          </Button>

          <Button color="inherit">
            <IconButton size="large" aria-label="settings" color="inherit">
              <SettingsIcon />
            </IconButton>
            <p className="mt-3">Settings</p>
          </Button>

          <MenuItem>
            <Tooltip title="User Accaunt">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                sx={{ p: 0 }}
                onClick={handleClick}
                
              >
                <AccountCircle className="mt-" />
                <p className="mt-2 h6">Profile</p>
              </IconButton>
            </Tooltip>
          </MenuItem>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <div>
              <MenuItem onClick={handleClose}>My Accaunt</MenuItem>
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </div>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
