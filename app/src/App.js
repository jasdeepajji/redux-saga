import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetch,del,api,edit} from './redux/actions';
import { bindActionCreators } from 'redux'

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			text:'',
			index:null
		}
	}
	/************* Submit value *****************/
	submit(event){
		event.preventDefault();
		if(event.target.txt.value != ''){
			if(this.state.index === null){
			 this.props.fetch(event.target.txt.value);
			} else{
			 this.props.edit(event.target.txt.value,this.state.index);
			}
			this.setState({text:'',index:null});		
		} else{
			alert("Please fill value first.")
		}
		
	}
    /************ Todo list ****************/
	list(){
		return this.props.todos.map((todo,index)=>
		 <tr key={index}>
		 <td>{index+1}</td>
		 <td width="250px">{todo.text}</td>
		 <td width="100px"><a onClick={()=>this.del(index)}>Delete</a></td>
		 <td><a onClick={()=>this.setState({text:todo.text,index:index})}>Edit</a></td>
		 </tr>
		);
	}
	/**************** Delete todo ************/
	del(index){
		this.props.del(index);
	}
    /*************** api calling ***************/
	callAPI(){
		this.props.api();
	}

  render() {
	return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Saga</h2>
        </div>
        <p className="App-intro"><br/>
          <u>To get started with React-Saga</u>
        </p>
		<div className="container">
		<div className="row">
		<form onSubmit={this.submit.bind(this)}>
		<div className="form-group ">
		<div className="col-md-12">
		<div className="col-md-3">
		<label >Enter value:</label>
		</div>
		<div className="col-md-5">
			<input type="text" name="txt" className="form-control" onChange={(event) => this.setState({text:event.target.value})} value={this.state.text}/>
			</div>
			<div className="col-md-1">
			<input type="submit" name="sub" className="btn btn-success" value={this.state.index === null ? "Add" : "Update"}/>
			</div>
			<div className="col-md-1">
			<button type="button" name="getIpInfo" className="btn btn-info" onClick={()=>this.callAPI()}>Call API</button>
			</div>
			</div>
			</div>
		</form><br/>
		<hr/>
		</div>
		
		<div className="col-md-12">
		<div className="col-md-8">
		<table >
		  <tbody>
		   {this.list()}
		  </tbody>
		</table>
		</div>

		<div className="col-md-4">
		<h3>Api data here ...</h3>
		{this.props.ipInfo.ip ? 
		<ul type="square" >
		  <li>
		   Your Country => {this.props.ipInfo.country}
		  </li>
		  <li>
		   Your State => {this.props.ipInfo.region}
		  </li>
		  <li>
		   Your City => {this.props.ipInfo.city}
		  </li>
		</ul>
		: ""
	    }
		</div>

		</div>
		
		</div>
		
      </div>
    );
  }
}

const mapSatetToProps = state => {
  return {
    todos:state.todos,
    ipInfo:state.ipInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch:bindActionCreators(fetch, dispatch),
	del:bindActionCreators(del, dispatch),
	api:bindActionCreators(api,dispatch),
	edit:bindActionCreators(edit,dispatch)
  }
}

export default App = connect(
  mapSatetToProps,
  mapDispatchToProps
)(App);


