import React from 'react'
import logo from '../images/logo.png'
import * as Gotham from '../fontStyle.css'

const NavigationBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
            <div className="container">
            <a style={Gotham} className="navbar-brand" href="#"><img src={logo} width="30" height="30" alt="screen door"/>SCREEN DOOR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav justify-content-center">
                    <a style={Gotham} className="nav-item nav-link" href="#">Home</a>
                    <a style={Gotham} className="nav-item nav-link" href="#">Features</a>
                    <a style={Gotham} className="nav-item nav-link" href="#">Pricing</a>
                    <a style={Gotham} className="nav-item nav-link nav-light" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
    )
}

export default NavigationBar;
