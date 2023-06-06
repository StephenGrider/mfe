import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles/headingStyle.js";

const useStyles = makeStyles(styles);

export default function Heading(props) {
  const { textAlign, category, title } = props;
  const classes = useStyles();
  const heading =
    classes.heading +
    " " +
    cx({
      [classes[textAlign + "TextAlign"]]: textAlign !== undefined
    });
  if (title !== undefined || category !== undefined) {
    return (
      <div className={heading}>
        {title !== undefined ? (
          <h3 className={classes.title}>{title}</h3>
        ) : null}
        {category !== undefined ? (
          <p className={classes.category}>{category}</p>
        ) : null}
      </div>
    );
  }
  return null;
}

Heading.propTypes = {
  title: PropTypes.node,
  category: PropTypes.node,
  textAlign: PropTypes.oneOf(["right", "left", "center"])
};
