import React from 'react';
import './App.css';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      value:null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('submit ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <label>email 
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <label>password 
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="submit"/>
      </form>  
    );
  }
}

export default Login;
