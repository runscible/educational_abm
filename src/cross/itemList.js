import React from 'react';
import {Typography,
        ListItem, Card,
        CardContent, Grid,
        Fab, SvgIcon,
        TextField }
         from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
        
        card:{
            padding: 40
        },
        content:{

        },
        fab: {
            position: 'relative',
            float: 'right'
        },
        border: {
            border: 'solid F0F0F0'
        },
        saveIcon: {
            position: 'relative',
            float: 'right'
        },
        textBox:{
           width: 110,
        }
    
});

export default props => {
    const {name, action, content, edited, editAction, saveAction} = props;
    const classes = useStyles();
    return (<Grid item>
              <ListItem >    
                    <Card
                        className={classes.card}>
                        <Fab color='primary'
                                     aria-label="Add"
                                     size='small'
                                     className={classes.fab}
                                     onClick={editAction}>
                                    <SvgIcon>
                                        <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/>    
                                    </SvgIcon>  
                                </Fab>
                        <CardContent>
                                    {
                                        !edited ? <Typography variant='h5'>
                                                     {name}
                                                   </Typography>:
                                        <TextField
                                             className={classes.textBox}   
                                             value={name}/> 
                                    }
                                    <hr/>
                                    {
                                        !edited ? <Typography className={classes.content} variant='subtitle1'>
                                                    {content}
                                                  </Typography>:
                                        <TextField
                                             className={classes.textBox}   
                                             value={name}/>          
                                    }
                        </CardContent>
                        {
                            edited ? 
                            <Fab
                            size='small' 
                            className={classes.saveIcon}
                            onClick={saveAction}>
                                <SvgIcon
                                    size='small'>
                                    <path d='M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z'/>
                                </SvgIcon>
                            </Fab>: null 
                        }
                    </Card>
                </ListItem>
            </Grid>);
}