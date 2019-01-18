import React, { Component } from 'react'

export default class SignupChildren extends Component {
  render() {
    return (
    <form action="api/signup" method="POST">
        <div class="form-group">
          <label for="user_id">ID</label>
          <input type="text" id="user_id" class="form-control" name="user_id" placeholder="Enter ID"/>
        </div>
        <div class="form-group">
          <label for="user_password">Password</label>
          <input type="password" class="form-control" name="user_password" aria-describedby="passwordHelp" id="user_password" placeholder="Password"/>
          <small id="passwordHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="user_age">age</label>
          <input type="text" class="form-control" name="user_age" id="user_age" placeholder="age"/>
        </div>
        <div class="form-group">
          <label for="user_git_id">github id</label>
          <input type="text" class="form-control" name="user_git_id" id="user_git_id" placeholder="git id"/>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    )
  }
}
