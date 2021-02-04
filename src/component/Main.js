import React from 'react';
import TopBar from './TopBar';
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1505,
    backgroundColor: '#f2faf5',
    marginLeft: 0,
    marginRight: 0,
  },
  
}));

export default function Main() {
  const classes = useStyles();

  return (
  <Container className={classes.root}>   
      <Grid container spacing={3} 
        style={{
          marginLeft: 'opx',
          marginRight: '0px',
      }}
      >
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs ={12}>
          <Grid container>
            <Grid item xs={1}>
              <NavBar />
            </Grid>
            <Grid item xs={11}>
              <Dashboard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
</Container>  

  );
}
