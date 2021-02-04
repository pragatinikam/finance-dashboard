import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import payPal from '../icons/payPal.jpg';
import debitCard from '../icons/debitCard.jpg'
import salary from '../icons/salary.jpg'
import Transaction from './Transaction'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import {Line} from 'react-chartjs-2';
import plan from '../icons/plan.jpg';
import Paper from '@material-ui/core/Paper';

import PanelHeader from "./PanelHeader";

import {
  dashboardPanelChart,
} from "./Charts.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius:'30px',
    backgroundColor: '#ffffff',
    marginLeft: '30px'
  },
  paper: {
    padding: theme.spacing(25),
    textAlign: 'center',
    backgroundColor: '#F2F5FA',
    marginRight: '30px',
    borderRadius: '20px'
  },
  title: {
      color: '#000000',
      fontSize: '20px',
      fontWeight: '900',
      textAlign: 'center',
      marginTop: 20
  },
  subtitle:{
      color:'#a3a3a4',
      fontSize: '15px',
      fontWeight: '300',
      textAlign: 'center',
  },
  price: {
    color: '#000000',
      fontSize: '20px',
      fontWeight: '700',
      textAlign: 'center',
  },
  card: {
   borderRadius: '30px',
      backgroundColor: "#F2F5FA"
  },
  media: {
      height: 100,
      width: 105,
      borderRadius: 30,
      marginLeft: 20,
  },
  debit: {
      maxWidth:400,
      height: 200,
      borderRadius: 30,
    
  },
  chartTitle: {
   marginTop: 50
  },
  chartPaper: {
    padding: theme.spacing(5),
    backgroundColor: '#F2F5FA',
    marginRight: '30px',
    marginTop: '15px',
    borderRadius: '20px'
  },
  chartPrice: {
    color: '#000000',
    fontSize: '30px',
    fontWeight: '900',
    textAlign: 'center'
  },
  control: {
    padding: theme.spacing(2),
  },

}));

const Dashboard = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sort: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.root}>
        
        <Grid container spacing={4}>
        
            <Grid item xs={8}>
                
                <Grid container spacing={3}>
                    <Grid item xs>
                    <h3 style={{marginLeft:'30px'}}>Dashboard</h3>
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                    className={classes.debit}
                    image={debitCard}    
                    />
                    </CardActionArea>
                    </Card>
                    </Grid>

            <Grid item xs>
                <h3>Upcoming Payments</h3>
          
                <Grid container spacing={2}>
                    <Grid item xs>
                    <Card className={classes.card}>
                    <CardContent>
                        <CardMedia
                        className={classes.media}
                        image={salary}
                        />
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Salary</Typography>
                        <Typography className={classes.subtitle} variant="h5" component="h2" textAlign="center">Belong interactive</Typography>
                        <Typography className={classes.price} color="textSecondary">+$2000</Typography>
                    </CardContent>
                    </Card>
                    </Grid>

                    <Grid item xs>
                        <Card className={classes.card}>
                        <CardContent>
                        <CardMedia
                            className={classes.media}
                            image={payPal}
                            />
                            <Typography className={classes.title} color="textSecondary" gutterBottom>PayPal</Typography>
                            <Typography className={classes.subtitle} variant="h5" component="h2" textAlign="center">Freelance Payment</Typography>
                            <Typography className={classes.price} color="textSecondary">$45:00</Typography>
                        </CardContent>
                        </Card>
                    </Grid>         
                </Grid>
            </Grid>
        </Grid>
            
        <Grid container spacing={3}>
                   
            <Grid item xs>
                
            <Grid container 
           className={classes.control}
            direction='row'>
                <h3 style={{marginLeft:'30px', marginRight:'450px'}}>Recent Transactions</h3>
                
                <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-sort-native-simple">Sort by</InputLabel>
                <Select
                    native
                    value={state.sort}
                    onChange={handleChange}
                    label="Sort"
                    inputProps={{
                    name: 'sort',
                    id: 'outlined-sort-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Default</option>
                    <option value={20}>A-Z</option>
                    <option value={30}>Z-A</option>
                </Select>
                </FormControl>
                
            </Grid>
              
               
            <Grid container spacing={2}>
                <Transaction />     
            </Grid>
            </Grid>
        </Grid>


        </Grid>

       
        <Grid item xs={4}>           
        <Grid item xs>
        <Card className={classes.chartPaper}>
          <CardHeader
            style={{
            color: "#676767",
            opacity:'0.4'
                    }}
            action={
                <MoreVertIcon />
            }
            title="Saved this Month"
          />
          <CardContent>
              <Typography className={classes.chartPrice} color="textSecondary">+$25,999.00</Typography> 
         
          <Grid container 
          spacing = {1} 
          style={{color:'red'}}
          >
          </Grid>
          
        <Grid container
         direction="row"
         justify="center"
         alignItems="center"
         className={classes.chartTitle}
          >
          <Grid item xs={3}>
              <Button>Day</Button>
          </Grid>
          <Grid item xs={3}>
             <Button>Hour</Button>
          </Grid>
          <Grid item xs={3}>
              <Button
              style={{
                fontWeight:"800"
              }}
              >Month</Button>
          </Grid>
          <Grid item xs={3}>
              <Button>Year</Button>
          </Grid>
        </Grid> 
       
       
        <>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        
      </>
      <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.debit}
                image={plan}    
              />
              </CardActionArea>
          </Card>
        </CardContent>
        </Card>
      

        </Grid>
        </Grid>
        </Grid>





      <Grid container spacing={3}>
       
     
        
        


      </Grid>


      
    </div>
  );
}


export default Dashboard;
