import React from 'react';
import ItemList from '../../cross/itemList';
import {List , ListItem, TextField, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';



const mockData = [
    {
        name: 'task_1',
        content: 'content_task_1'
    },
    {
        name: 'task_2',
        content: 'content_task_2'
    },{
        name: 'task_3',
        content: 'content_task_3'
    }
]

const useStyles = makeStyles(theme => ({
    root: {
        width: 100,
        backgroundColor: 'green',
        border: 'solid F0F0F0'
    },
    addTask: {
        marginLeft: 15
    }
}));
const edit = () => {

}

const addTask = () => {

}
export default props =>{
    const [edited , setEdited] = React.useState(false);    
    const classes = useStyles();
    return (
            <Grid item> 
              <TextField
                     onChange={addTask}   
                     className={classes.addTask}   
                     variant="outlined" 
                     placeholder='add item'/>  
              <List>  
              {
                  mockData.map((item, index)=>{
                      return<ItemList
                                key={index}
                                name={item.name}
                                content={item.content}
                                editAction={()=> setEdited(true)}
                                edited={edited}
                                saveAction={()=> setEdited(false)}/>
                        })
              }
              </List>  
           </Grid>
        ); 
}