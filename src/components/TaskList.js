import React from 'react';
import { connect } from "react-redux";
import {addTask,loadDetails,completeTask} from '../redux/actions/action';
import './TaskList.style.css';
import AddTask from './AddTask';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      task:'',
      complete:false,
    }
  }

  handleAddTask=(e)=>{
    e.preventDefault();
    const {task} =this.state;
    this.props.addTask(task);
    this.setState({task:''})
  }

  handleChange=(e)=>{
    this.setState({task:e.target.value})
  }

  handleDelete=(index)=>{
    this.props.completeTask(index);
  }
  handleDetails =(index)=>{
    this.props.loadDetails(index);
    
  }
  render(){
      const {Tasks,loadTask,index, complete,details}=this.props.todo;
      const index2 = index;
      const keyIndexs =Object.keys(details); 
      const keyValue =Object.values(details);
  return(<>
          {loadTask === true ? (
          <AddTask/>
          ):(
   
    <div className="container">
        
        <form onSubmit={this.handleAddTask} >
          <h1 >Add Tasks</h1>
          <input type="text" required value={this.state.task} onChange={this.handleChange} />
          <button className='btn btn-primary' type='submit'> Add Task</button>
                { Tasks.map((item,index )=>{
                  console.log(index,index2);
                   return (<>
                      <li  className='d-flex mb-2 mt-4' key={index} >
                      
                      {index2 == index && complete ? (
                        <i className='fa fa-check fa-lg ml-3 delete' title='Done?' onClick={()=>this.handleDelete(index)} style={{marginTop:'14px'}}/>
                      ):(
                        <i className='fa fa-circle-o-notch fa-lg ml-3 delete' title='Done?' onClick={()=>this.handleDelete(index)} style={{marginTop:'14px'}}/>
                      ) }
                        <div className='d-flex flex-column'>
                            <h1 className='ml-3 mr-4'>{item}</h1>
                            {keyIndexs.map((key,ind) => {
                                if(key == index) {
                                return <p>{keyValue[ind]}</p>
                              }
                            })}
                        </div>
                        <i className='fas fa-pen fa-2x ml-auto mr-5 update' title='Add Details' onClick={()=>this.handleDetails(index)} style={{marginTop:'8px' }}/>
                      </li>
                     
                  </>  )
                  })
                }
        </form>
      </div>

  )}
</>)
}};

const mapStateToProps =(state)=>({
  todo:state.todo
});

export default connect(mapStateToProps,{addTask,loadDetails,completeTask})(App);