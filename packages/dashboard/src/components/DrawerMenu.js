import React,{useEffect} from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Link
} from "@material-ui/core";
import clsx from 'clsx';
import { alpha, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Chip from '@material-ui/core/Chip';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter, useHistory, useLocation } from "react-router-dom";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

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
export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
    white: {
      color: "#FFF !important"
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      background: "#37474f",
      color: "#FFF",
    },
    drawerOpen: {
      width: drawerWidth,
      background: "#37474f",
      color: "#FFF",
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      background: "#37474f",
      color: "#FFF",
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
      // vertical padding + font size from searchIcon
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
    appLogo:{
        width: "calc(100% - 30%)",
        margin: "15px 5px 15px 19px",
        float: "left"
    }
    
  }));

const DrawerMenu = props => {
  const { history } = props;
  const classes = useStyles();
  const location = useLocation();
console.log("location===", location.pathname.toUpperCase());
  const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon style={{color:"#FFF"}}/>,
      onClick: () => history.push("/dashboard")
    },
    {
      text: "Orders",
      icon: <ShoppingCartIcon style={{color:"#FFF"}}/>,
      onClick: () => history.push("/dashboard/orderspage")
    },
    {
      text: "Customers",
      icon: <PeopleIcon style={{color:"#FFF"}}/>,
      onClick: () => history.push("/dashboard/customers")
    },
    {
        text: "Reports",
        icon: <BarChartIcon style={{color:"#FFF"}}/>,
        onClick: () => history.push("/dashboard/reports")
      },
      {
        text: "Integrations",
        icon: <LayersIcon style={{color:"#FFF"}}/>,
        onClick: () => history.push("/dashboard/integrations")
      },
      {
        text: "Current month",
        icon: <AssignmentIcon style={{color:"#FFF"}}/>,
        onClick: () => history.push("/dashboard/currentmonth")
      },
      {
        text: "Last quarter",
        icon: <InboxIcon style={{color:"#FFF"}}/>,
        onClick: () => history.push("/dashboard/lastquarter")
      },
      {
        text: "Year-end sale",
        icon: <MailIcon style={{color:"#FFF"}} />,
        onClick: () => history.push("/dashboard/yearendsale")
      }
  ];
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const [getusername, setGetusername] = React.useState("");
  useEffect(() =>{
    setGetusername(sessionStorage.getItem("username"))
  }, [sessionStorage.getItem("username")])

  let usenavigate = useHistory();

  const handleMobileMenuOpenOwn = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
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
  return (<div className={classes.root}>
    <CssBaseline />
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            
          >
            <MenuIcon className={classes.white} />
          </IconButton>
          <Typography variant="h6" noWrap>
            {location.pathname}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={4} >
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Button
              ref={anchorRefMenu}
              aria-controls={openMenu ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggleMenu}
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                variant="dot"
              ><Chip
                  avatar={<Avatar size="medium" alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" className={classes.large} />}
                  label={getusername}
                  onClick={handleClickAvata}
                  variant="outlined"
                  color="secondary"
                />
              </StyledBadge>
            </Button>
            <Popper open={openMenu} anchorEl={anchorRefMenu.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseMenu}>
                      <MenuList autoFocusItem={openMenu} id="menu-list-grow" onKeyDown={handleListKeyDownMenu}>
                        <MenuItem onClick={handleCloseMenu}><Link to="./Profile">Profile</Link></MenuItem>
                        <MenuItem onClick={handleCloseMenu}><Link to="./MyAccount">My account</Link></MenuItem>
                        <MenuItem onClick={handleCloseMenu}><Link to="/" onClick={() => usenavigate.push('/')}>Logout</Link></MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpenOwn}
              style={{color:"#FFF"}}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
 
    <MUIDrawer variant="permanent" 
    color="inherit"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
    >
         <div className={classes.drawerHeader}>
         <img src={require("./logo.svg").default} className={classes.appLogo}  alt="logo" />
         <IconButton onClick={handleDrawerClose} style={{color:"#FFF", padding: "20px 10px"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </MUIDrawer>
    </div>
  );
};

export default withRouter(DrawerMenu);
