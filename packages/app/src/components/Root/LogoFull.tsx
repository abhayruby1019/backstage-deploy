import React from 'react';
import { makeStyles } from '@material-ui/core';
import PwLogoFull from './logo/poonawalla.logo.png';

const useStyles = makeStyles({
logo: {
objectFit: 'contain',
width: 'auto',
height: 58,
background: 'white',
padding: '5px',
marginLeft: '12px'
},
});
const LogoFull = () => {
const classes = useStyles();

// eslint-disable-next-line jsx-a11y/alt-text
return ( <img className={classes.logo} src={PwLogoFull} /> );
};

export default LogoFull;