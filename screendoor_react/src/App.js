import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import NagivationBar from './components/NagivationBar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';

class App extends Component {
 
render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <NagivationBar />
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/Signup" component={ Signup } />
                  <Route exact path="/Signin" component={ Signin } />
                </div>
            </div>
          </Router>
        </Provider>


      // <div className="App">
      //   <header className="App-header">

      //   </header>
      //   <p>{this.state.response}</p>
      //   <form onSubmit={this.handleSubmit}>
      //     <p>
      //       <strong>회원가입 페이지</strong>
      //     </p>
      //     <h1>아이디</h1>
      //     <input
      //       type="text"
      //       value={this.state.user_id}
      //       onChange={e => this.setState({ user_id: e.target.value })}
      //     />
          
      //     <h1>패스워드</h1>
      //     <input
      //       type="text"
      //       value={this.state.user_password}
      //       onChange={e => this.setState({ user_password: e.target.value })}
      //     />
          
      //     <h1>이름</h1>
      //     <input
      //       type="text"
      //       value={this.state.user_name}
      //       onChange={e => this.setState({ user_name: e.target.value })}
      //     />
           
      //     <h1>나이</h1>
      //     <input
      //       type="text"
      //       value={this.state.user_age}
      //       onChange={e => this.setState({ user_age: e.target.value })}
      //     />
          
      //     <h1>깃 허브 아이디</h1>
      //     <input
      //       type="text"
      //       value={this.state.user_git_id}
      //       onChange={e => this.setState({ user_git_id: e.target.value })}
      //     />
      //     <button type="submit">Submit</button>
      //   </form>
      //   <p>{this.state.responseToPost}</p>
      // </div>
    );
  }
}
export default App;