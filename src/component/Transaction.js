import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button, Divider, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/icons/MoreVert';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


// Generate Order Data
function createData(id, icon, name, detail, amount) {
  return { id, icon, name, detail, amount};
}

const rows = [
  createData(0, <ShoppingBasketIcon />, 'Shopping', '05 Jun 2020 10:00', '$300'),
  createData(0, <LocalGroceryStoreIcon />, 'Grocery', '12 Jun 2020 10:00', '$45'),
  createData(0, <FitnessCenterIcon />, 'Gym', '23 Jun 2020 12:00', '$120'),
  createData(0, <LocalLaundryServiceIcon />, 'Laundry', '27 Jun 2020 09:45', '$90'),
  createData(0, <DirectionsCarIcon />, 'Car Repair', '28 Jun 2020 10:20', '$100'),
];


const useStyles = makeStyles((theme) => ({
  table: {
      marginLeft: 30
  },
}));


const options = [
  'Apple pay',
  'Transfer to account',
  'Report for transaction',
];

export default function Transaction(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   return (
    <React.Fragment>
      
      <Table size="medium" className={classes.table}>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell  >{row.icon}</TableCell>
              <TableCell style={{fontWeight: '600'}}>{row.name}</TableCell>
              <TableCell style={{color: '#aeaeae'}}>{row.detail}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              <TableCell style={{fontWeight: '600'}}>{row.amount}</TableCell>
              <TableCell style={{color: '#aeaeae'}}>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: '25ch',
                        borderRadius:'30px',
                        backgroundColor:"#000000"
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} selected={option === 'Apple pay'} onClick={handleClose}
                      style={
                        {
                          color: '#ffffff',
                          fontWeight: '400',
                          margin:'5px'
                        }
                      }
                      >
                        {option}
                      
                      </MenuItem>
                    ))}
                  </Menu>
                              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </React.Fragment>
  );
}