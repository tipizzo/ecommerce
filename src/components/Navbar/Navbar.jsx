import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom';

import logo from "../../assets/gaming_logo2.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    if(location.pathname === '/')

  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color=''>
                    <img src={logo} alt="GamingLand" height="25px" className={classes.image}/>
                    GAMING<u><b>LAND</b></u>
                </Typography>
                <div className={classes.grow}></div>
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={ totalItems } color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar;