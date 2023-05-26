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
import { useStyles } from "./Styles"
import GridContainer from "./chartList/components/Grid/GridContainer.js";
import GridItem from "./chartList/components/Grid/GridItem.js";
import { Card, CardBody, CardFooter, CardHeader, CardIcon } from './chartList/components/Card';
import Timeline from "@material-ui/icons/Timeline";


export default function Dashboard(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <DrawerMenu setData={props} />
      <Container maxWidth="xxl" className={classes.content}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={3}>
      <Card>
                <CardHeader color="rose" icon>
                  <CardIcon color="rose">
                    <MonetizationOnIcon style={{ fontSize: "25px", color: "#FFF" }} />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>
                  BUDGET
                  </h4>
                </CardHeader>
                <CardBody style={{  width: "100%" }}>
                <span style={{ fontSize: "35px", fontWeight: 'bold' }}>$24k</span>
                </CardBody>
                <CardFooter >
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(240, 68, 56)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
                    <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
                  </div>
                </CardFooter>
              </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          
        <Card>
                <CardHeader color="rose" icon>
                  <CardIcon color="rose">
                    <TouchAppSharpIcon style={{ fontSize: "25px", color: "#FFF" }} />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>
                  TOTAL CUSTOMERS
                  </h4>
                </CardHeader>
                <CardBody style={{  width: "100%" }}>
                <span style={{ fontSize: "35px", fontWeight: 'bold' }}>1.6k</span>
                </CardBody>
                <CardFooter >
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(240, 68, 56)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
                    <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
                  </div>
                </CardFooter>
              </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
        <Card>
                <CardHeader color="rose" icon>
                  <CardIcon color="rose">
                  <WrapTextSharpIcon style={{ fontSize: "25px", color: "#FFF" }} />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>
                  TASK PROGRESS
                  </h4>
                </CardHeader>
                <CardBody style={{  width: "100%" }}>
                <span style={{ fontSize: "35px", fontWeight: 'bold' }}>75.5%</span>
                </CardBody>
                <CardFooter >
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(240, 68, 56)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
                    <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
                  </div>
                </CardFooter>
              </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
        <Card>
                <CardHeader color="rose" icon>
                  <CardIcon color="rose">
                  <PeopleAltSharpIcon style={{ fontSize: "25px", color: "#FFF" }} />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>
                  TOTAL PROFIT
                  </h4>
                </CardHeader>
                <CardBody style={{  width: "100%" }}>
                <span style={{ fontSize: "35px", fontWeight: 'bold' }}>$24k</span>
                </CardBody>
                <CardFooter >
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: '300', color: "rgb(240, 68, 56)" }}><VerticalAlignBottomSharpIcon style={{ marginTop: "13px", verticalAlign: "-7" }} /> 12% </span>
                    <span style={{ fontSize: "12px", fontWeight: '300', marginLeft: "20px" }}> Since last month</span>
                  </div>
                </CardFooter>
              </Card>
        </Grid>
        </Grid>
        
        <div className={classes.appBarSpacer} />
        {/* <div className={classes.cardLayout}>
          <Paper variant="outlined" >
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
        </div> */}
        <Container maxWidth="xxl" className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={9}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <Timeline />
                      </CardIcon>
                      <h4 className={classes.cardIconTitle}>
                        Multiple Bars Chart <small>- Bar Chart</small>
                      </h4>
                    </CardHeader>
                    <CardBody style={{ height: "354px", width: "100%" }}>
                      {/* <ChartistGraph
                data={multipleBarsChart.data}
                type="Bar"
                options={multipleBarsChart.options}
                listener={multipleBarsChart.animation}
              /> */}
                      <Chart />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </Grid>
            <Grid item xs={12} md={5} lg={3}>
              {/* <Paper className={fixedHeightPaper}>
                <ChartTwo />
              </Paper> */}
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <Timeline />
                      </CardIcon>
                      <h4 className={classes.cardIconTitle}>
                        Multiple Bars Chart <small>- Bar Chart</small>
                      </h4>
                    </CardHeader>
                    <CardBody style={{ height: "238px", width: "100%" }}>
                      <ChartTwo />

                    </CardBody>
                    <CardFooter>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: 'row',
                          flexBasis: "100%",
                          textAlign: "center"
                        }}
                      >
                        <span style={{ flexBasis: "33%" }}>
                          <h3>Desktop</h3>
                          <h5>63%</h5>
                        </span>
                        <span style={{ flexBasis: "33%" }}>
                          <h3>Tablet</h3>
                          <h5>15%</h5>
                        </span>
                        <span style={{ flexBasis: "33%" }}>
                          <h3>Phone</h3>
                          <h5>22%</h5>
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </Grid>
            <Grid item xs={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <PeopleAltSharpIcon style={{ fontSize: "25px", color: "#FFF" }} />
                      </CardIcon>
                      <h4 className={classes.cardIconTitle}>
                        All User List <small>- List area</small>
                      </h4>
                    </CardHeader>
                    <CardBody style={{ width: "100%" }}>
                      {/* <ChartistGraph
                data={multipleBarsChart.data}
                type="Bar"
                options={multipleBarsChart.options}
                listener={multipleBarsChart.animation}
              /> */}
                      <Orders />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              {/* <Paper className={classes.paper}>
                <Orders />
              </Paper> */}
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}