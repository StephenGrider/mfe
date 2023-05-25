import React from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import VerticalAlignBottomSharpIcon from '@material-ui/icons/VerticalAlignBottomSharp';
import TouchAppSharpIcon from '@material-ui/icons/TouchAppSharp';
import WrapTextSharpIcon from '@material-ui/icons/WrapTextSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import ChartTwo from './ChartTwo';
import Orders from './Orders';
import DrawerMenu from './DrawerMenu';
import {useStyles} from "./Styles"


export default function Customers() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
     <DrawerMenu />
      <Container maxWidth="xxl" className={classes.content}>
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
        <Container maxWidth="xxl" className={classes.content}>
          <Grid container spacing={3}>
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