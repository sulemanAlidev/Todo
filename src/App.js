import React from 'react'
import TaskList from './components/TaskList';
import {BrowserRouter as Router,Route  } from "react-router-dom";
import AddTask from './components/AddTask';


function App(){
  return(
    
    <Router>
      <Route exact path='/' component={TaskList}/> 
      <Route exact path='/addtask' component={AddTask}/> 

    </Router>
    
  )
}
export default App;