import React, { Component } from 'react'

export default class SignupChildren extends Component {
  constructor() {
    super();
    this.state = {
      user_id:'',
      user_password:'',
      user_age:'',
      user_git_id:'',
      response:''
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const {user_id, user_password, user_age, user_git_id} = this.state
      const user = {
          user_id: user_id,
          user_password: user_password,
          user_age:user_age,
          user_git_id:user_git_id
      }

      this.setState({
          ...user
      })
      //나중에 여기다가 node 연결 넣으면됨
      console.log(this.state);
  }

  render() {
    const {handleChange,handleSubmit, state} = this;

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user_id">ID</label>
          <input type="text" id="user_id" className="form-control" name="user_id" placeholder="Enter ID" value={state.user_id} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="user_password">Password</label>
          <input type="password" className="form-control" name="user_password" placeholder="Enter Password" value={state.user_password} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="user_age">Age</label>
          <input type="text" className="form-control" name="user_age" placeholder="Enter your age" value={state.user_age} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="user_git_id">Github</label>
          <input type="text" className="form-control" name="user_git_id" aria-describedby="signUpHelp" placeholder="Enter your git id" value={state.user_git_id} onChange={handleChange}/>
          <small id="signUpHelp" className="form-text text-muted">We'll never share your account with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    )
  }
}