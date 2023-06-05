import React from 'react';
import clsx from 'clsx';
import { alpha, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blueGrey from '@material-ui/core/colors/red';
import Paper from '@material-ui/core/Paper';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import VerticalAlignBottomSharpIcon from '@material-ui/icons/VerticalAlignBottomSharp';
import TouchAppSharpIcon from '@material-ui/icons/TouchAppSharp';
import WrapTextSharpIcon from '@material-ui/icons/WrapTextSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chart from '../Chart/Chart';
import ChartTwo from '../Chart/ChartTwo';
import Orders from '../Orders/Orders';
import Badge from '@material-ui/core/Badge';
import DrawerMenu from '../Menu/DrawerMenu';

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
    maxWidth:"xl"
  },
  grow: {
    flexGrow: 1,
  },
  appLogo: {
    width: "calc(100% - 30%)",
},
  cardLayout: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(8),
      flexBasis: "25%",
      padding: "30px 30px"
    },
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
  white:{
    color:"#FFF !important"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    background: "#37474f",
    color:"#FFF",
  },
  drawerOpen: {
    width: drawerWidth,    
    background: "#37474f",
    color:"#FFF",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {   
    background: "#37474f",
    color:"#FFF",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Reports() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const handleMobileMenuOpenOwn = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRefMenu = React.useRef(null);

  const handleToggleMenu = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleCloseMenu = (event) => {
    if (anchorRefMenu.current && anchorRefMenu.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDownMenu(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRefMenu.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);
  
  const handleClickAvata = () => {
    console.info('You clicked the Chip.');
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>

      <CssBaseline />
      
      <DrawerMenu />

      <Container  className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={classes.cardLayout}>
          <Paper variant="outlined">
            <span style={{ fontSize: "15px", fontWeight: '300' }}>  BUDGET<br />
              <span style={{ fontSize: "35px", fontWeight: 'bold' }}>$24k</span>
              <span style={{
                padding: "20px", float: "right", margin: "-20px 0px 0px 0px",
                background: "rgb(240, 68, 56)", borderRadius: "100%", display: 'flex', justifyContent: "center", alignItems: "center", height: "50px", width: "50px"
              }} ><MonetizationOnIcon style={{ fontSize: "25px", color: "#FFF" }} /></span>
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(240, 68, 56)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
              <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
            </div>
          </Paper>
          <Paper variant="outlined">
            <span style={{ fontSize: "15px", fontWeight: '300' }}>  TOTAL CUSTOMERS<br />
              <span style={{ fontSize: "35px", fontWeight: 'bold' }}>1.6k</span>
              <span style={{
                padding: "20px",
                float: "right",
                margin: "-20px 0px 0px 0px",
                background: "rgb(16, 185, 129)",
                borderRadius: "100%", display: 'flex', justifyContent: "center",
                alignItems: "center", height: "50px",
                width: "50px"
              }} ><TouchAppSharpIcon style={{ fontSize: "25px", color: "#FFF" }} /></span>
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(16, 185, 129)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
              <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
            </div>
          </Paper>
          <Paper variant="outlined">
            <span style={{ fontSize: "15px", fontWeight: '300' }}>  TASK PROGRESS<br />
              <span style={{ fontSize: "35px", fontWeight: 'bold' }}>75.5%</span>
              <span style={{
                padding: "20px",
                float: "right", margin: "-20px 0px 0px 0px",
                background: "rgb(247, 144, 9)", borderRadius: "100%",
                display: 'flex', justifyContent: "center",
                alignItems: "center", height: "50px",
                width: "50px"
              }} ><WrapTextSharpIcon style={{ fontSize: "25px", color: "#FFF" }} /></span>
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
                width: "50px"
              }} >
                <PeopleAltSharpIcon style={{ fontSize: "25px", color: "#FFF" }} />
              </span>
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(99, 102, 241)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
              <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
            </div>
          </Paper>
        </div>
        <Container  className={classes.content}>
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
        
      </Container>
    </div>
  );
}