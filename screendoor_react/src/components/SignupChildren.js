import React from 'react'

const SignupChildren = ({onSubmit, onChange, user_id, user_password, user_age, user_git_id}) => {
    
    
    
    return (
    <form onSubmit={onSubmit} >
        <div className="form-group">
          <label htmlFor="user_id">ID</label>
          <input type="text" id="user_id" className="form-control" name="user_id" placeholder="Enter ID" onChange={onChange} value={user_id} />
        </div>
        <div className="form-group">
          <label htmlFor="user_password">Password</label>
          <input type="password" className="form-control" name="user_password" placeholder="Enter Password" onChange={onChange} value={user_password}/>
        </div>
        <div className="form-group">
          <label htmlFor="user_age">Age</label>
          <input type="text" className="form-control" name="user_age" placeholder="Enter your age" onChange={onChange} value={user_age}/>
        </div>
        <div className="form-group">
          <label htmlFor="user_git_id">Github</label>
          <input type="text" className="form-control" name="user_git_id" aria-describedby="signUpHelp" placeholder="Enter your git id" onChange={onChange} value={user_git_id}/>
          <small id="signUpHelp" className="form-text text-muted">We'll never share your account with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    )
}

export default SignupChildren