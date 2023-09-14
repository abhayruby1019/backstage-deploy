import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
      marginLeft: '30px',
      marginTop: '25px',
      color: 'black',
      fontSize: '2rem',
      fontWeight: 630
    },
  });
  
export const HomePage = () => {
  const classes = useStyles();
  return <h1 className={classes.title}>Dashboard Monitor</h1>;
};