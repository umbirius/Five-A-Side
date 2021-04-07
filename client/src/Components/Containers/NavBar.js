import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import useStyles from "./styles"

export default function NavBar () {
    const classes = useStyles()

    return (
        <AppBar className={classes.navBar} position='static'>BAr</AppBar>
    )

}