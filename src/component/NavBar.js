import React from 'react'
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


const NavBar = () => {
    return (
        <div
        style={{ 
            marginLeft: '40px', 
            marginTop: '80px'
        }}
        >
        <Grid container 
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
        >
            <Grid item >
                <HomeIcon fontSize="large" />
            </Grid>
            <Grid item >
                <MailIcon fontSize="large" />
            </Grid>
            <Grid item >
            <ChatOutlinedIcon fontSize="large" />
            </Grid>
            <Grid item >
                <PersonOutlineOutlinedIcon fontSize="large" />
            </Grid>
            <Grid item >
                <BackupOutlinedIcon fontSize="large" />
            </Grid>
            <Grid item > 
                <SettingsOutlinedIcon fontSize="large" />
            </Grid>
           
        </Grid>
        </div>
    )
}
export default NavBar;