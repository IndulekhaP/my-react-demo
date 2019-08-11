import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import EmployeeDetails from './components/EmployeeDetails'

class App extends Component{
  render(){
    return( 
      <div  className="App">
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/employee-details" component={EmployeeDetails} />
      </Router>
      </div>
    );
  }
}

export default App;
