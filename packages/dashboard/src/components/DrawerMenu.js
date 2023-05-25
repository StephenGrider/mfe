import React, { useEffect } from "react";
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
import { withRouter, useHistory, useLocation, Redirect } from "react-router-dom";
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
import { useStyles } from "./Styles";



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


const DrawerMenu = props => {
    const { history } = props;
    useEffect(() => {
        (sessionStorage.getItem("statusCode") === null || sessionStorage.length === 0) && history.push("/auth/signin");
    }, [sessionStorage])
    const classes = useStyles();
    const location = useLocation();
    const itemsList = [
        {
            text: "Dashboard",
            icon: <DashboardIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard")
        },
        {
            text: "Orders",
            icon: <ShoppingCartIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard/orderspage")
        },
        {
            text: "Customers",
            icon: <PeopleIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard/customers")
        },
        {
            text: "Reports",
            icon: <BarChartIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard/reports")
        }
    ];
    const itemsListTwo = [
        {
            text: "Integrations",
            icon: <LayersIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard/integrations")
        },
        {
            text: "Current month",
            icon: <AssignmentIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard/currentmonth")
        },
        {
            text: "Last quarter",
            icon: <InboxIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard/lastquarter")
        },
        {
            text: "Charts",
            icon: <MailIcon style={{ color: "#FFF" }} />,
            onClick: () => history.push("/dashboard/chartList")
        }
    ];
    const itemsListThree = [
        {
            text: "Profile",
            icon: <LayersIcon style={{ color: "#ccc" }} />,
            onClick: () => history.push("/dashboard/profile")
        },
        {
            text: "My account",
            icon: <AssignmentIcon style={{ color: "#ccc" }} />,
            onClick: () => history.push("/dashboard/my-account")
        },
        {
            text: "Logout",
            icon: <InboxIcon style={{ color: "#ccc" }} />,
            onClick:() => handleLogout()
        },
    ];
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const mobileMenuId = 'primary-search-account-menu-mobile';

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
    const handleLogout = () => {
        sessionStorage.removeItem("jwttoken");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("statusCode");
        sessionStorage.removeItem("fullnameUser");
        usenavigate.push("/auth/signin");
    };


    return (<><div className={classes.root}>
        
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
                <Typography variant="h6" noWrap style={{ textTransform: "capitalize" }}>
                    {location.pathname.slice(1)}
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
                        >
                            <Avatar onClick={handleClickAvata} src="https://v4.mui.com/static/images/avatar/1.jpg" className={classes.orange} />
                       {/* {props.usernameProps} */}
                        
                        {/* <Chip
                                avatar={<Avatar size="medium" alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" className={classes.large} />}
                                label={sessionStorage.getItem("fullnameUser")}
                                onClick={handleClickAvata}
                                variant="default"
                                color="secondary"
                                style={{backgroundColor:"#FFF !important"}}
                            /> */}
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
                                    <List>
                                        {itemsListThree.map((item, index) => {
                                            const { text, icon, onClick } = item;
                                            return (<>
                                                <ListItem button key={text} onClick={onClick}>
                                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                                    <ListItemText primary={text} />
                                                </ListItem>
                                                <Divider />
                                                </>
                                            );
                                        })}
                                        </List>
                                        {/* <MenuList autoFocusItem={openMenu} id="menu-list-grow" onKeyDown={handleListKeyDownMenu}>
                                            <MenuItem onClick={handleCloseMenu}><Link to="./Profile">Profile</Link></MenuItem>
                                            <MenuItem onClick={handleCloseMenu}><Link to="./MyAccount">My account</Link></MenuItem>
                                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                        </MenuList> */}
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
                        style={{ color: "#FFF" }}
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
                <img src={require("./logo.svg").default} className={classes.appLogo} alt="logo" style={{height:
                "40px"}} />
                <IconButton onClick={handleDrawerClose} style={{ color: "#FFF", padding: "20px 10px" }}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (<>
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                        <Divider />
                        </>
                    );
                })}
                <br/>
                <br/>
                {itemsListTwo.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (<>
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                        <Divider />
                        </>
                    );
                })}
            </List>
            
        </MUIDrawer>
        
    </div>
    </>
    );
};

export default withRouter(DrawerMenu);
