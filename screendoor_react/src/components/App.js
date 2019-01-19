import React from 'react'
import NavigationBar from './NavigationBar'
import SignupContainer from '../containers/SignupContainers'
import { Container,Row,Col } from 'reactstrap'
import mainbg from '../images/mainbg_2.png'
const margin = {
    "margin-top": "80px"
  }

const App = () =>{
    return (
      <div>
        <NavigationBar/>
        <Container fluid="true" className="bg-dark">
            <Row>
                <Col xs="4" style={{"margin-top":"10%","margin-left":"20%"}}>
                    <img src={mainbg}/>
                </Col>
                <Col xs="3" style={margin}>
                    <SignupContainer/>
                </Col>
            </Row>
        </Container>
      </div>
    )
}

export default App;
