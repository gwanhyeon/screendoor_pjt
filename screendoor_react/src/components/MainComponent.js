import React,{Fragment} from 'react'
import logo from '../images/logo.png'
import SigninContainer from '../containers/SigninContainers'
import * as Gotham from '../fontStyle.css'
import { Container,Row,Col } from 'reactstrap'
import mainbg from '../images/mainbg_2.png'
import SignupContainer from '../containers/SignupContainers'
import About from './About'
import Features from './Features'
import Footer from './Footer'

const margin = {
    "marginTop": "80px"
  }
const MainComponent = () => {

    return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="nav-scroll">
            <div className="container">
            <a style={Gotham} className="navbar-brand" href="#"><img src={logo} width="30" height="30" alt="screen door"/>SCREEN DOOR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                
                <ul className="nav justify-content-center">
                 <li className="nav-item">
                 <a className="nav-link" href="#home">home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#about">about</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#feature">feature</a>
                </li>
                </ul>
                
                    {/* <a style={Gotham} className="nav-item nav-link" href="#home">Home</a>
                    <a style={Gotham} className="nav-item nav-link" href="#about">About</a>
                    <a style={Gotham} className="nav-item nav-link" href="#board">Board</a>
                    {/* <a style={Gotham} className="nav-item nav-link nav-light" href="#" tabIndex="-1" aria-disabled="true">Disabled</a> */}
                
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>{' '}
            </form>
            &nbsp;
            <SigninContainer/>
            </div>
        </nav>
      
        <div data-spy="scroll" data-target="#nav-scroll" data-offset="0">
        <h4 id="home">@home</h4>
        <Container fluid={true} className="bg-dark">
            <Row>
                <Col xs="4" style={{"marginTop":"10%","marginLeft":"20%"}}>
                    <img src={mainbg}/>
                </Col>
                <Col xs="3" style={margin}>
                    <SignupContainer/>
                </Col>
            </Row>
        </Container>
        <Container style={{marginTop:20}}>
        <h4 align="center" className="display-4" id="about">About Us</h4>
        <About/>
        <hr class="featurette-divider" id="feature"></hr>
        </Container>
        <Features/>
        </div>
        <Footer/>
        </Fragment>
        
    )
}

export default MainComponent;
