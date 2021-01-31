import React, { Component } from 'react';
import { connect } from "react-redux";
import {addDetails,cancelDetail} from '../redux/actions/action';



import './AddTask.style.css';

class AddTask extends Component {
    state={
        details:'',
        item:this.props.todo.Tasks[this.props.todo.index]
    }

    handleChange=(e)=>{
        const {name,value} =e.target;
        this.setState({[name]:value})
    }
    addDetails =(e)=>{
        e.preventDefault();
        const {details,item}=this.state;
        const {index} =this.props.todo;

        this.props.addDetails(details,index)
            // this.props.addTask(task)

    }
    handleCancel = (e)=>{
        this.props.cancelDetail();
    }

    
    render() {
        const {Tasks,index}=this.props.todo;
        console.log()
        return (<>
           <div className="container">
        
        <form  className='d-flex flex-column' >
            <h1 >Add Details</h1>
            <input type="text" name='item' value={this.state.item} onChange={this.handleChange} />
            <input className='pb-5' placeholder='Type details here...' type="text" name='details' value={this.state.details} onChange={this.handleChange}/>
            <div className='d-flex'>
                <button className='btn btn-primary mr-2 flex-grow-1' onClick={this.addDetails}> Add Details</button>
                <button className='btn btn-primary ml-2 flex-grow-1' onClick={this.handleCancel}> Cancel</button>
            </div>
           
        
        </form>

      </div>

       </> )
    }
}
const mapStateToProps=(state)=>({
    todo:state.todo
})

export default connect(mapStateToProps,{addDetails,cancelDetail})(AddTask);