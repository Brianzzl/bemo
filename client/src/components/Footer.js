import React from "react";
import { Facebook, Twitter } from "@material-ui/icons";
import { Typography, Box, IconButton, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    backgroundColor: "#0D2ADB",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  link: {
    color: "#ff6347",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography className={classes.text}>
        ©2013-2016 BeMo Academic Consulting Inc. All rights reserved.
        <Link className={classes.link}>Disclaimer & Privacy Policy</Link>{" "}
        <Link className={classes.link}> Contact Us</Link>
      </Typography>

      <Box>
        <IconButton>
          <Facebook style={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <Twitter style={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
