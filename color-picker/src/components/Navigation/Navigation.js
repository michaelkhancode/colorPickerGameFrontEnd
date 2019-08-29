import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom"

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
            <MenuItem onClick={handleClose}>
              <Link style={{textDecoration:"none", color:"black"}}>Leader Board</Link>  
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link to="/" style={{textDecoration:"none", color:"black"}}>Sign In</Link> 
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link style={{textDecoration:"none", color:"black"}}>Logout</Link>
            </MenuItem>

            </Menu>
        </div>
    </nav>

    );
  }

export default Navigation;