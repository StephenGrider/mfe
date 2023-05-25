import {
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    cardTitle
  } from "assets/jss/material-dashboard-pro-react.js";
  
  const ChartStyle = {
    cardTitle,
    cardCategory: {
      margin: "0",
      color: grayColor[0]
    },
    cardIconTitle: {
      ...cardTitle,
      marginTop: "15px",
      marginBottom: "0px"
    },
    legendTitle: {
      color: grayColor[0],
      margin: "10px 0 !important",
      display: "flex"
    },
    primary: {
      color: primaryColor[0]
    },
    warning: {
      color: warningColor[0]
    },
    danger: {
      color: dangerColor[0]
    },
    success: {
      color: successColor[0]
    },
    info: {
      color: infoColor[0]
    },
    rose: {
      color: roseColor[0]
    },
    gray: {
      color: grayColor[0]
    },
    cardFooter: {
      display: "block"
    }
  };
  
  export default ChartStyle;
  