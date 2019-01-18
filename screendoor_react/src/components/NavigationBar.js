import React from 'react'
import logo from '../images/logo.png'
import * as Gotham from '../fontStyle.css'

const NavigationBar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
            <div class="container">
            <a style={Gotham} class="navbar-brand" href="#"><img src={logo} width="30" height="30" alt="screen door"/>SCREEN DOOR</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav nav justify-content-center">
                    <a style={Gotham} class="nav-item nav-link" href="#">Home</a>
                    <a style={Gotham} class="nav-item nav-link" href="#">Features</a>
                    <a style={Gotham} class="nav-item nav-link" href="#">Pricing</a>
                    <a style={Gotham} class="nav-item nav-link nav-light" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
    )
}

export default NavigationBar;
