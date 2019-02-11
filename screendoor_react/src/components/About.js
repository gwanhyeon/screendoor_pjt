import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import taeil from '../images/taeil.jpg'
import gwanhyeon from '../images/gwanhyeon.jpg'
import gotham from '../fonts/Gotham Light Regular.otf'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'

class About extends Component {
    render() {
        const fontFamily = {
            fontFamily:{gotham}
        }
        return (
            <Container style={{marginTop:20}}>
            <Row>
                <Col align="center" lg="4">
                <img  className="rounded-circle"
                     src={taeil}
                     width="200"
                     height="200"/>
                <h4 style={{marginTop:20}}>Taeil, Lee</h4>
                <p>screendoor member<br/>
                online lecturer<br/>
                Best of the Best 6th
                </p>
                <a href="https://www.linkedin.com/in/taeil-lee-54a576114/">
                    <img width="30" height="30" src={linkedin}/>
                </a>
                <a href="https://www.instagram.com/_original_kimchi_/">
                <img width="30" height="30" style={{marginLeft:5}} src={instagram}/>
                </a>
                <a href="https://github.com/rekt77">
                <img width="30" height="30" style={{marginLeft:5}} src={github}/>
                </a>
                </Col>
                <Col align="center" lg="4">
                <img className="rounded-circle"
                     src={gwanhyeon}
                     width="200"
                     height="200"/>
                <h4 style={{marginTop:20}}>Gwanhyeon, Kim</h4>
                <p>screendoor member</p>
                <a href="https://www.linkedin.com/in/gwanhyeon-kim-11648916b/">
                <img width="30" height="30" src={linkedin}/>
                </a>
                <a href="https://www.instagram.com/g.h_kimm/">
                <img width="30" height="30" style={{marginLeft:5}} src={instagram}/>
                </a>
                <a href="https://github.com/kgh940525">
                <img width="30" height="30" style={{marginLeft:5}} src={github}/>
                </a>
                </Col>

                <Col align="center" lg="4">
                <img className="rounded-circle"
                     src={taeil}
                     width="200"
                     height="200"/>
                <h4 style={{marginTop:20}}>Taeil, Lee</h4>
                <p>screendoor member<br/>
                online lecturer<br/>
                Best of the Best 6th
                </p>
                <p></p>
                </Col>

            </Row>
            </Container>
        );
    }
}

export default About;