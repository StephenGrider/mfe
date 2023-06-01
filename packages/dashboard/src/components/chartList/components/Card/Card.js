import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./../styles/cardStyle.js";

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial,
    chart,
    login,
    ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [classes.cardChart]: chart,
    [classes.cardLogin]: login,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  blog: PropTypes.bool,
  raised: PropTypes.bool,
  background: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  product: PropTypes.bool,
  chart: PropTypes.bool,
  login: PropTypes.bool,
  children: PropTypes.node
};
