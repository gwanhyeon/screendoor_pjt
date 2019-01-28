import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo.png'
class Board extends Component {
    render() {
        return (
            <div>
                Board
                <img src={logo}></img>
                <img src={logo}></img>
                <img src={logo}></img>
                <img src={logo}></img>
                

            </div>
        );
    }
}

export default Board;