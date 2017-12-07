import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetch,del,api} from './redux/actions';
import { bindActionCreators } from 'redux'

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			text:''
		}
	}
	
	submit(event){
		event.preventDefault();
		if(event.target.txt.value != ''){
			this.props.fetch(event.target.txt.value);
			event.target.txt.value = '';		
		} else{
			alert("Please fill value first.")
		}
		
	}

	list(){
		return this.props.todos.map((todo,index)=>
		 <tr key={index}>
		 <td>{index+1}</td>
		 <td width="250px">{todo.text}</td>
		 <td><a onClick={()=>this.del(todo.text)}>Delete</a></td>
		 </tr>
		);
	}
	
	del(txt){
		this.props.del(txt);
	}

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
        <p className="App-intro">
          To get started with React-Saga
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
			<input type="text" name="txt" className="form-control"/>
			</div>
			<div className="col-md-1">
			<input type="submit" name="sub" className="btn btn-success" value="Submit"/>
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
		<ul type="circle" >
		  <li>
		   Country :- {this.props.ipInfo.country}
		  </li>
		  <li>
		   City :- {this.props.ipInfo.city}
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
	api:bindActionCreators(api,dispatch)
  }
}

export default App = connect(
  mapSatetToProps,
  mapDispatchToProps
)(App);


