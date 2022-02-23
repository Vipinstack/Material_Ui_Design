import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Button,
  InputBase,
  makeStyles,
  // Tab,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  Logolg: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  Logosm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  Search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },

  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  Cancel: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  Badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h6" className={classes.Logolg}>
            Vipin DEv
          </Typography>
          <Typography variant="h6" className={classes.Logosm}>
            Yaski
          </Typography>
          {/* <div className="flex items-center"> */}
          <div className={classes.Search}>
            <Search />
            <InputBase
              placeholder="Search Anything.."
              className={classes.input}
            />
            <Cancel className={classes.Cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => setOpen(true)}
            />
            <Badge badgeContent={4} color="secondary" className={classes.Badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.Badge}>
              <Notifications />
            </Badge>
            <Avatar
              alt="Cindy Baker"
              src="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg"
              className="mr-4"
            />
          <Button variant="contained" color="secondary" className={classes.Badge} >
          {/* <Tab label='Most popular ideas'  to='/register' component={register} />register */}
          register
          </Button>
          <Button variant="contained" color="secondary" className={classes.Badge}>
            Login
          </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
