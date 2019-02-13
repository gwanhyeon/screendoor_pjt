import React from 'react';
import { Container } from 'reactstrap';
import rocket from '../images/startup.svg';
import planets from '../images/planets.svg';
import laptop from '../images/coding.svg'
const Features = () =>{
    const style ={
        "margin-top":"7rem",
        "line-height":"1",
        "letter-spacing": "-.05rem"
    }
        return (
            <Container>
                <div style={{marginTop:100}} className="row featurette">
                    <div className="col-md-7">
                    <h2 style={style} className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{width: 300, height:300}} src={rocket} data-holder-rendered="true"/>
                    </div>
                </div>
                <div style={{marginTop:150}} className="row featurette">
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{width: 300, height:300}} src={planets} data-holder-rendered="true"/>
                    </div>
                    <div className="col-md-7">
                        <h2 style={style} className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                </div>
                <div style={{marginTop:150}} className="row featurette">
                    <div className="col-md-7">
                        <h2 style={style} className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{width: 300, height:300}} src={laptop} data-holder-rendered="true"/>
                    </div>
                </div>
            </Container>
        );
    }
export default Features;