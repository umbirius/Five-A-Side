import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



import AppBar from "@material-ui/core/AppBar";
import useStyles from "./styles";

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.navBar} position="static">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </AppBar>
  );
}
