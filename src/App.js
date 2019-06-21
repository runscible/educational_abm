import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import './App.css';
import TaskList from './components/taskList/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Grid container
            justify='center'>
          <TaskList/>
      </Grid>
    </div>
  );
}

export default App;
