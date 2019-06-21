import React from 'react';
import Button from '@material-ui/core/button';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme =>  ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: 'red',
      borderRadius: 25,
      padding: 10,
      fontSize: 15,
      border: 'solid #E2E2E2 0.1em'
    }
  }));


const ABoton = props => {
    const { nombre, evento } = props;
    const classes = styles();
    return <>
             <Button
                onClick={evento} 
                className={classes.button}>
                {nombre}
             </Button>   
           </> 
    }

export default ABoton;