import React, { Component } from 'react'

export default class SignupChildren extends Component {
  render() {
    return (
    <form action="api/signup" method="POST">
        <div className="form-group">
          <label for="user_id">ID</label>
          <input type="text" id="user_id" className="form-control" name="user_id" placeholder="Enter ID"/>
        </div>
        <div className="form-group">
          <label for="user_password">Password</label>
          <input type="password" className="form-control" name="user_password" id="user_password" placeholder="Enter Password"/>
        </div>
        <div className="form-group">
          <label for="user_age">Age</label>
          <input type="text" className="form-control" name="user_age" id="user_age" placeholder="Enter your age"/>
        </div>
        <div className="form-group">
          <label for="user_git_id">Github</label>
          <input type="text" className="form-control" name="user_git_id" id="user_git_id" aria-describedby="signUpHelp" placeholder="Enter your git id"/>
          <small id="signUpHelp" className="form-text text-muted">We'll never share your account with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    )
  }
}
