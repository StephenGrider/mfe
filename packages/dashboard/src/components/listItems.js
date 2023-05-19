import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <DashboardIcon style={{color:"#FFF"}}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <ShoppingCartIcon style={{color:"#FFF"}}/>
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <PeopleIcon style={{color:"#FFF"}}/>
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <BarChartIcon style={{color:"#FFF"}}/>
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <LayersIcon style={{color:"#FFF"}}/>
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <AssignmentIcon style={{color:"#FFF"}}/>
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <AssignmentIcon style={{color:"#FFF"}} />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{minWidth:"40px"}}>
        <AssignmentIcon style={{color:"#FFF"}}/>
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);