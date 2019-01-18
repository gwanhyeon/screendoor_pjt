import React from 'react'
import NavigationBar from './NavigationBar'
import SignupContainer from '../containers/SignupContainers'
import { Container,Row,Col } from 'reactstrap'
import mainbg from '../images/mainbg.png'
const margin = {
    "margin-top": "110px"
  }

const App = () =>{
    return (
      <div>
        <NavigationBar/>
        <Container fluid="true" className="bg-dark">
            <Row>
                <Col xs="6">
                    <img src={mainbg}/>
                </Col>
                <Col xs="5" style={margin}>
                    <SignupContainer/>
                </Col>
            </Row>
        </Container>
      </div>
    )
}

export default App;
