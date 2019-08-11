import React, { Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isUsernameValid: false,
            isPasswordValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addPassword({
            password: e.target.password.value
        });
        this.props.history.push('/')
    }
    handleChange(e){
        if(e.target.name === 'username')
            (e.target.value !== '') ? this.setState({isUsernameValid: true}): this.setState({isUsernameValid: false})
        if(e.target.name === 'password')
            e.target.value !== '' ? this.setState({isPasswordValid: true}) : this.setState({isPasswordValid: false})
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit = {this.handleSubmit}>
                   Username: <input type="text" name="username" onChange = {this.handleChange}></input><br/>
                    Password: <input type="text" name="password" onChange = {this.handleChange}></input><br/>
                    <button type="submit" disabled={!this.state.isUsernameValid || !this.state.isPasswordValid}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        password: state.password
    };
};

const mapDispachToProps = dispatch => {
    return {
        addPassword: (password) => dispatch({ type: "ADD_PWD", payload: password }),
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Login);