// Login.js

import React, { Component } from 'react';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

class Signin extends Component {

   
    state = {
        user_id: '',
        user_password: '',
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            user_id: this.state.user_id,
            user_password: this.state.user_password,
        }
        console.log(user);
        this.props.loginUser(user);
    }

    render() {
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="User_id"
                    className="form-control"
                    name="user_id"
                    onChange={ this.handleInputChange }
                    value={ this.state.user_id }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="User_password"
                    className="form-control"
                    name="user_password"
                    onChange={ this.handleInputChange }
                    value={ this.state.user_password }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Login User
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

Signin.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Signin)