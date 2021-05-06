import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  AccountBox,
  Book,
  Close,
  ExitToApp,
  Home,
  Menu,
} from "@material-ui/icons";
import { selectAuth, setAuthenticate } from "../../features/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function LeftDrawer() {
  const isAuthenticated = useSelector(selectAuth);

  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setAuthenticate());
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <ListItem button key="Home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem button key="About">
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        {isAuthenticated ? (
          <ListItem button key="Logout" onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <Link to="/login">
            <ListItem button key="Login">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Login or Signup" />
            </ListItem>
          </Link>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer("left", true)}>
          {state["left"] ? (
            <Close fontSize="large" />
          ) : (
            <Menu fontSize="large" />
          )}
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
