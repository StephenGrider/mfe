import React from 'react';
import clsx from 'clsx';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import VerticalAlignBottomSharpIcon from '@material-ui/icons/VerticalAlignBottomSharp';
import TouchAppSharpIcon from '@material-ui/icons/TouchAppSharp';
import WrapTextSharpIcon from '@material-ui/icons/WrapTextSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart/Chart';
import ChartTwo from './Chart/ChartTwo';
import Orders from './Orders/Orders';
import DrawerMenu from './Menu/DrawerMenu';
import { useStyles } from "./Styles/Styles"
import GridContainer from "./chartList/components/Grid/GridContainer.js";
import GridItem from "./chartList/components/Grid/GridItem.js";
import { Card, CardBody, CardFooter, CardHeader, CardIcon } from './chartList/components/Card';
import Timeline from "@material-ui/icons/Timeline";


export default function Dashboard(props) {
  const classes = useStyles();
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <DrawerMenu setData={props} />
      <Container className={classes.content} >
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
              <CardBody style={{ width: "100%" }}>
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
              <CardBody style={{ width: "100%" }}>
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
              <CardBody style={{ width: "100%" }}>
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
              <CardBody style={{ width: "100%" }}>
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
        <Container className={classes.content}>
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
                      <Chart />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </Grid>
            <Grid item xs={12} md={5} lg={3}>
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
                      <Orders />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}