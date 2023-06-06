import React from "react";
import { Box, Typography, Grid, Link } from "@material-ui/core";


const Layout = () => {
  const imgElem = <img src={require("./logo.svg").default} alt="logo" />;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid
        container
        sx={{
          flex: "1 1 auto",
        }}
      >
        <Grid
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                height: 32,
                width: 32,
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid
          style={{ width: "100%" }}
          sx={{
            width: "100%",
            alignItems: "center",
            background:
              "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: "flex",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              style={{ margin: "5% 0" }}
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
                mb: 1,
                color: "#FFFFFF"
              }}
              variant="h2"
            >
              Welcome to{" "}
              <Box component="span" sx={{ color: "#15B79E" }}>
                SUKA
              </Box>
            </Typography>
            <Typography
              style={{ margin: "5% 0" }}
              align="center"
              sx={{
                fontSize: "24px",
                mb: 3,
              }}
              variant="h4"
            >
              The Operational Digital Twin for Smarter Supply Chains.
            </Typography>
            <Typography align="center" sx={{ mb: 3 }} variant="h3">
              <Link
                color="textSecondary"
                href="https://kyanite360.com/"
                target="_blank"
              >
                {imgElem}
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
