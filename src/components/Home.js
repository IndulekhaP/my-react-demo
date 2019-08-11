import React, { Component } from 'react'
import { Redirect } from 'react-router';
import {connect} from 'react-redux'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNameValid: false,
            isNumberValid: false,
            isEmailValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addEmployee({
            name: e.target.name.value, 
            number: e.target.number.value, 
            email: e.target.email.value
        });
        this.props.history.push('/employee-details')
    }
    handleChange(e){
        if(e.target.name === 'name')
            (e.target.value !== '') ? this.setState({isNameValid: true}): this.setState({isNameValid: false})
        if(e.target.name === 'number')
            e.target.value !== '' ? this.setState({isNumberValid: true}) : this.setState({isNumberValid: false})
        if(e.target.name === 'email')
            e.target.value !== '' ? this.setState({isEmailValid: true}) : this.setState({isEmailValid: false})
    }
    render(){
        if(this.props.password === 0)
            return <Redirect to="/login" />
        return(
            <div>             
                <h1>Add Employee</h1>
                <form onSubmit = {this.handleSubmit}>
                    Employee Name: <input type="text" name="name" onChange = {this.handleChange}></input><br/>
                    Employee Number: <input type="text" name="number" onChange = {this.handleChange}></input><br/>
                    Employee Email: <input type="text" name="email" onChange = {this.handleChange}></input><br/>
                    <button type="submit" disabled={!this.state.isNameValid || !this.state.isNumberValid || !this.state.isEmailValid}>Submit</button>
                </form>
                <a href="" onClick={this.props.logout}>Logout</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        number: state.number,
        email: state.email,
        password: state.password
    };
};

const mapDispachToProps = dispatch => {
    return {
        addEmployee: (formData) => dispatch({ type: "ADD_EMP", payload: formData }),
        logout: () => dispatch({ type: "CLEAR_STORE"})
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Home);