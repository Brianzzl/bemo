import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Link,
  CardMedia,
  Divider,
  List,
  Box,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

import { Home } from "@material-ui/icons";
import Drawer from "@material-ui/core/Drawer";
import logo from "../assets/image/logo.png";

const menuItem = [
  {
    ListText: "Home",
    ListPath: "/",
  },
  {
    ListText: "Contacts",
    ListPath: "/contacts",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  link: {
    color: "black",
    fontSize: "1.5rem",
    paddingRight: "2rem",
  },
  ListItem: {
    textAlign: "center",
    color: "black",
  },
  logo: {
    paddingLeft: "0.5rem",
    paddingTop: "0.5rem",
    width: 167,
    height: 100,
    zIndex: 2,
  },
  appbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const Header = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [dropDown, setDropdown] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setDropdown({ ...dropDown, [anchor]: open });
  };

  const dropDownMenu = (anchor) => (
    <Box
      // style={classes.BackdropProps}
      component="div"
      onClick={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <Box paddingTop="7rem"></Box>
        {menuItem.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.ListPath}>
            <ListItemText
              className={classes.ListItem}
              primary={item.ListText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <AppBar
      className={classes.appbar}
      position="sticky"
      elevation={0}
      style={{ background: "rgba(255,255,255,0.7)" }}
    >
      <CardMedia
        className={classes.logo}
        src={logo}
        component="img"
        title=" logo"
      />
      <Toolbar className={classes.menuButton}>
        <Box display={{ xs: "block", sm: "none", md: "none", lg: "none" }}>
          <IconButton onClick={toggleDrawer("top", true)}>
            <Menu style={{ color: "blue" }} />
          </IconButton>
        </Box>

        <Box
          //
          display={{ xs: "none", sm: "block" }}
        >
          <Link href="/" underline="hover" className={classes.link}>
            Main
          </Link>

          <Link href="contacts" underline="hover" className={classes.link}>
            Contact Us
          </Link>
        </Box>

        <Drawer
          anchor="top"
          open={dropDown.top}
          onClose={toggleDrawer("top", false)}
        >
          {dropDownMenu("top")}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
