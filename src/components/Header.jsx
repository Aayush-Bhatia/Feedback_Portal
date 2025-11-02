import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Tooltip, // Yeh user ke icon par hover karne se 'View Profile' dikhata hai
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'; // Title ke saath ek icon

/**
 * Header Component
 * Yeh poori app ka main header/navbar hai.
 * @param {Object} props
 * @param {Function} props.toggleDrawer - Yeh App.jsx se aata hai, mobile par drawer kholne ke liye
 */
function Header({ toggleDrawer }) {
  return (
    <AppBar
      position="fixed"
      className="bg-white text-gray-800 shadow-sm border-b border-gray-200"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} 
    >
      <Toolbar className="flex justify-between">
        <Box className="flex items-center gap-2">
          
          {/* Mobile par menu kholne wala button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: { xs: 0, sm: 2 }, display: { sm: 'none' } }} // small screen se upar hide kar do
          >
            <MenuIcon />
          </IconButton>

          <a
            href="#"
            className="flex items-center gap-2 transition-opacity hover:opacity-80" // Hover par halka fade effect
          >
            {/* Feedback ka icon (app ko ek identity deta hai) */}
            <FeedbackOutlinedIcon className="text-blue-800" />
                        
            <Typography
              variant="h6"
              noWrap 
              component="div"
              className="font-bold text-white-800" 
            >
              Feedback Portal
            </Typography>
          </a>
        </Box>

        
        
        {/* <Tooltip title="View Profile">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="User Avatar" src="https://i.pravatar.cc/40" />
          </IconButton>
        </Tooltip> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

