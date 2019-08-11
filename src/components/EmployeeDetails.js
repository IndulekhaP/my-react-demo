import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

class EmployeeDetails extends Component{
    render(){
        if(this.props.password === 0)
            return <Redirect to="/login" />
        return(
            <div>
                <h1>Employee Details</h1>
                <p>
                    Employee Name: {this.props.name} <br/>
                    Employee Number: {this.props.number} <br/>
                    Employee Email: {this.props.email} <br/>
                </p>
                <Link to="/">Add Employee</Link>
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
        logout: () => dispatch({ type: "CLEAR_STORE"})
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(EmployeeDetails);