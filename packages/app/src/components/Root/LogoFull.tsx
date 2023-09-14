import React from 'react';
import { makeStyles } from '@material-ui/core';
import TwLogoFull from './logo/tw.logo.png';

const useStyles = makeStyles({
logo: {
objectFit: 'contain',
width: 'auto',
height: 38,
background: 'white',
padding: '5px',
marginLeft: '12px'
},
});
const LogoFull = () => {
const classes = useStyles();

// eslint-disable-next-line jsx-a11y/alt-text
return ( <img className={classes.logo} src={TwLogoFull} /> );
};

export default LogoFull;