
// Register.js

import React, { Component } from 'react';

class Signup extends Component {

  
    state = {
        user_id: '',
        user_password: '',
        user_name: '',
        user_age: null,
        user_git_id: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            user_id: this.state.user_id,
            user_password: this.state.user_password,
            user_name: this.state.user_name,
            user_age: this.state.user_age,
            user_git_id: this.state.user_git_id
        }
        console.log(user);
    }

    render() {
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="user_id"
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
                    <input
                    type="text"
                    placeholder="User_name"
                    className="form-control"
                    name="user_name"
                    onChange={ this.handleInputChange }
                    value={ this.state.user_name }
                    />
                </div>

                <div className="form-group">
                    <input
                    type="number"
                    placeholder="User_age"
                    className="form-control"
                    name="user_age"
                    onChange={ this.handleInputChange }
                    value={ this.state.user_age }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="User_git_id"
                    className="form-control"
                    name="user_git_id"
                    onChange={ this.handleInputChange }
                    value={ this.state.user_git_id }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register User
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

export default Signup;
