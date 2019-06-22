import React from 'react';
import ItemList from '../../cross/itemList';
import {List , ListItem,
        TextField, Grid,
        SvgIcon, Fab} from '@material-ui/core';
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
    },
    addIcon: {
        position: 'relative',
        left: 15,
        top: 10
    }
}));
const edit = () => {

}


export default props =>{
    const [newTaskName , setNewTaskName] = React.useState('');
    const [edited , setEdited] = React.useState(false);    
    const classes = useStyles();
    const addTask = event => {
        if (newTaskName) {
            const newTask = {
                name :  newTaskName,
                content: ''
            }
            mockData.push(newTask)
        }
    }
    return (
            <Grid item> 
              <TextField
                     onChange={ event => setNewTaskName(event.target.value)}   
                     className={classes.addTask}   
                     variant="outlined" 
                     placeholder='add item'
                     value={newTaskName}   
                     />
                     <Fab 
                        className={classes.addIcon}
                        size='small'
                        onClick={ event => addTask(event)}>
                        <SvgIcon>
                            <path d='M20.7,7C20.4,7.4 20,7.7 20,8C20,8.3 20.3,8.6 20.6,9C21.1,9.5 21.6,9.9 21.5,10.4C21.5,10.9 21,11.4 20.5,11.9L16.4,16L15,14.7L19.2,10.5L18.2,9.5L16.8,10.9L13,7.1L17,3.3C17.4,2.9 18,2.9 18.4,3.3L20.7,5.6C21.1,6 21.1,6.7 20.7,7M3,17.2L12.6,7.6L16.3,11.4L6.8,21H3V17.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z'/>
                        </SvgIcon>
                     </Fab>  
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