import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
  
    return (
    <nav style={{marginLeft:"auto"}}>
        <div>
            <Button 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
            >
            Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Leader Board</MenuItem>
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    </nav>

    );
  }

export default Navigation;

