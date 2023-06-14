import { Divider, IconButton, Toolbar, Typography} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Header = () => {
  return (
    <>
        <Toolbar>
            <IconButton color='inherit'>
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' style={{flexGrow:"1", fontWeight:"Bold"}}>Blogging Website</Typography>
            <IconButton color='inherit'>
                
                <NotificationsIcon />
                
            </IconButton>
            <IconButton color='inherit'>
                <AccountCircleIcon />
            </IconButton>
        </Toolbar>
        <Divider />
        <Toolbar style={{fontSize:25,justifyContent:"center",fontFamily:"Montserrat"}}>Express your emotions through words</Toolbar>
    </>
  )
}

export default Header