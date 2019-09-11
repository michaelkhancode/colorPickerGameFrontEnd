import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import Alert from "../Alert/Alert"
import Profile from '../Profile/Profile';

const Navigation = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function handleClose(event) {
      switch (event.target.id) {
        case "leaderboard":
          props.changePath("/leaderboard")
          break;
        case "profile":
          props.changePath("/profile")
          break;
        case "logout":
          props.changePath("/")
          break;
        default:
          break;
      }
      setAnchorEl(null);
    }

    console.log(props)

    return (
    <nav style={{marginLeft:"auto", gridColumn: 3 }}> 
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

            <MenuItem id="leaderboard" onClick={handleClose}>
                Leader Board
            </MenuItem>

            <MenuItem id="profile" onClick={handleClose}>
                Profile
            </MenuItem>

            <MenuItem id="logout" onClick={handleClose}>
                Logout
            </MenuItem>
            </Menu>
        </div>
    </nav>

    );
  }

export default Navigation;

{/* 
  <MenuItem onClick={handleClose}>
<Link 
style={{textDecoration:"none", color:"black"}} 
to={{
  pathname: "/profile",
  state: { user: props.user }
}}
>
  Profile
</Link>  
</MenuItem>

<MenuItem onClick={handleClose}>
<Link 
style={{textDecoration:"none", color:"black"}} 
to={{
  pathname: "/leaderboard",
}}
>
  Leader Board
</Link> 
</MenuItem>

<MenuItem onClick={handleClose}>
<Link 
style={{textDecoration:"none", color:"black"}} 
to="/"
>
  Logout
</Link>
</MenuItem> 
*/}

// var to;
//maingame:     Leaderboard, Profile Logout

//[{pathname:"/leaderboard", text:"Leader Board"}, {pathname:"/profile", state: { user: props.user }, text:"Profile"}, {pathname:"/", text:"Logout"}] 

//profile:      Play Game, Leaderboard, Logout

//leaderboard:  Play Game, Profile, Logout





