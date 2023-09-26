import React from 'react';
import { makeStyles } from '@material-ui/core';
import PwLogoIcon from './logo/poonawalla.logo.icon.jpeg';

const useStyles = makeStyles({
  logo: {
    objectFit: 'contain',
    width: 'auto',
    height: 50,
    background: 'white', 
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img className={classes.logo} src={PwLogoIcon}/>
  );
};

export default LogoIcon;