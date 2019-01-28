import React from 'react'
import MainComponent from './components/MainComponent'
import SignupContainer from './containers/SignupContainers'
import { Container,Row,Col } from 'reactstrap'
import mainbg from './images/mainbg_2.png'

const margin = {
    "marginTop": "80px"
  }

const App = () =>{
    return (
      <div>
        <MainComponent/>
      </div>
    )
}

export default App;