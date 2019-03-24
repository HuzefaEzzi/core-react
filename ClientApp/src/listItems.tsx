import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
     <Link to="/" style={{ textDecoration: 'none' }}>
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItem>
    </Link>
    <Link to="/counter" style={{ textDecoration: 'none' }}>
        <ListItem button>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Counter" />
        </ListItem>
    </Link>
    <Link to="/fetchdata" style={{ textDecoration: 'none' }}>
        <ListItem button>
        <ListItemIcon>
            <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Fetch Data" />
        </ListItem>
    </Link>
    <Link to="/secretfetchdata" style={{ textDecoration: 'none' }}>
        <ListItem button>
        <ListItemIcon>
            <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Secret Fetch Data" />
        </ListItem>
    </Link>
  </div>
);
