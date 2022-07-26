import './App.css';
import Chain from './chain.png';
import React, {Component , useState} from 'react';
import Identicon from 'react-identicons';

class Navbar extends Component {


  handleDisconnectClick = (event) => {
    event.preventDefault()
    this.props.disconnect()
  }


  render() {
    
    return (
      <div>
        <div className='container-fluid bg-dark text-light border-bottom border-warning pt-2'>
          <nav className="navbar">
            <div className="container-fluid ">
              <a className="d-flex navbar-brand text-light" href="#">
                <img src={Chain} alt="" width="30" height="24" className="d-inline-block align-text-top m-1 p-1"></img>
                <p>Chainpost</p>
              </a>
                {this.props.account ?
                <div className='d-md-flex align-items-center justify-content-center text-center'>
                  <Identicon className="m-1" string={this.props.account} size={25}></Identicon>
                  <div><p className='m-1 fw-bold raleway text-primary'>{this.props.account.slice(0,8)}... </p></div>
                  <button className='btn btn-sm m-1  btn-primary' onClick={this.handleDisconnectClick}>DISCONNECT</button>
                </div>
                :
                <></>
                }
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
