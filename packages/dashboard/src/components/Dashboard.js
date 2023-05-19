import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import ChartTwo from './ChartTwo';
import Orders from './Orders';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import VerticalAlignBottomSharpIcon from '@material-ui/icons/VerticalAlignBottomSharp';
import TouchAppSharpIcon from '@material-ui/icons/TouchAppSharp';
import WrapTextSharpIcon from '@material-ui/icons/WrapTextSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import blueGrey from '@material-ui/core/colors/red';
const primary = blueGrey[500];
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const drawerWidth = 240;
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  cardLayout: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(16),
      flexBasis: "25%",
      padding: "30px 30px"
    },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color:"#FFF",
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: "rgb(28, 37, 54)",
    color: "rgb(255, 255, 255) !important",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    backgroundColor: "rgb(28, 37, 54)",
    color: "rgb(255, 255, 255) !important",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    //flexGrow: 1,
    //height: '100vh',
    //overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 440,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} color={primary}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            style={{color:"#FFF !important"}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon style={{background:"#FFF !important"}} />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        //bgcolor="text.primary"
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={classes.cardLayout}>
          <Paper variant="outlined">
            <span style={{ fontSize: "15px", fontWeight: '300' }}>  BUDGET<br />
              <span style={{ fontSize: "35px", fontWeight: 'bold' }}>$24k</span>
              <span style={{ padding: "20px", float: "right", margin: "-20px 0px 0px 0px", 
              background: "rgb(240, 68, 56)", borderRadius: "100%", display: 'flex', justifyContent: "center", alignItems: "center", height: "50px", width: "50px" }} ><MonetizationOnIcon style={{ fontSize: "25px", color: "#FFF" }} /></span>
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(240, 68, 56)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
              <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
            </div>
          </Paper>
          <Paper variant="outlined">
            <span style={{ fontSize: "15px", fontWeight: '300' }}>  TOTAL CUSTOMERS<br />
              <span style={{ fontSize: "35px", fontWeight: 'bold' }}>1.6k</span>
              <span style={{ padding: "20px", 
              float: "right",
               margin: "-20px 0px 0px 0px", 
               background: "rgb(16, 185, 129)", 
               borderRadius: "100%", display: 'flex', justifyContent: "center", 
               alignItems: "center", height: "50px", 
               width: "50px" }} ><TouchAppSharpIcon style={{ fontSize: "25px", color: "#FFF" }} /></span>
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(16, 185, 129)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
              <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
            </div>
          </Paper>
          <Paper variant="outlined">
            <span style={{ fontSize: "15px", fontWeight: '300' }}>  TASK PROGRESS<br />
              <span style={{ fontSize: "35px", fontWeight: 'bold' }}>75.5%</span>
              <span style={{ padding: "20px", 
              float: "right", margin: "-20px 0px 0px 0px", 
              background: "rgb(247, 144, 9)", borderRadius: "100%", 
              display: 'flex', justifyContent: "center", 
              alignItems: "center", height: "50px", 
              width: "50px" }} ><WrapTextSharpIcon style={{ fontSize: "25px", color: "#FFF" }} /></span>
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(247, 144, 9)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
              <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
            </div>
          </Paper>
          <Paper variant="outlined">
            <span style={{ fontSize: "15px", fontWeight: '300' }}>  TOTAL PROFIT<br />
              <span style={{ fontSize: "35px", fontWeight: 'bold' }}>$24k</span>
              <span style={{ 
                padding: "20px", 
                float: "right", 
                margin: "-20px 0px 0px 0px", 
                background: "rgb(99, 102, 241)", 
                borderRadius: "100%", 
                display: 'flex', 
                justifyContent: "center", 
                alignItems: "center", 
                height: "50px", 
                width: "50px" }} >
                  <PeopleAltSharpIcon style={{ fontSize: "25px", color: "#FFF" }} />
                  </span>
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(99, 102, 241)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
              <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
            </div>
          </Paper>
        </div>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={7} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={5} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ChartTwo />
                
              </Paper>
              
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    </div>
  );
}