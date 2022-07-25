import './App.css';
import StartImage  from './start.svg';
import React, {Component , useState} from 'react';


class Start extends Component {


  render() {
    
    return (
      <div>
        <div className='container-fluid bg-dark text-light border-bottom border-warning pt-2'>
          <div className='d-md-flex flex-column justify-content-center align-items-center text-center'>
            <h1>Start Your Journey</h1>
            <button className='btn bg-none'><img src={StartImage} className='img-fluid w-25' onClick={this.props.connectWallet}></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
