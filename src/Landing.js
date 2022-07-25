import './App.css';
import Logo from './logo.svg'
import Freelance from './freelance.svg';
import Dev from './dev.png'
import React, {Component , useState} from 'react';


class Landing extends Component {


  render() {
    
    return (
      <div>
        {/* Heading */}
        <div className='container-fluid bg-dark text-light border-bottom border-warning pt-2'>
          <div className='d-md-flex flex-row justify-content-around     align-items-center text-md-start text-center'>
            <div className=''>
              <h1>About Dev</h1>
              <p className=''>C++ developer with over 3 years of experince</p>
              <p>In love with blockchain, and trying to improve his javascript, solidity skills.
              </p>
              <div className='d-flex align-items-center justify-content-center m-1 p-1'>
                <a href="https://t.me/brmrush"><button className='btn text-light m-1'><h1><i className='bi bi-telegram my-icon'></i></h1></button></a>
                <a href="https://github.com/brmrush/chainpost"><button className='btn text-light m-1'><h1><i className='bi bi-github my-icon'></i></h1></button></a>
                <a href="https://www.linkedin.com/in/onur-olgun-1107a215b/"><button className='btn text-light m-1'><h1><i className='bi bi-linkedin my-icon'></i></h1></button></a>

              </div>
            </div>
            <img src={Dev} className='img-fluid w-25'></img>
          </div>
        </div>

        {/*App Info*/}
        <div className='container-fluid bg-dark text-light border-bottom border-warning pt-2'>
          <div className='d-md-flex flex-row justify-content-around align-items-center text-md-start text-center'>
            <div className='m-md-5 m-2'>
              <h1>Break Your Chains</h1>
              <p className=''>Chainpost allows you to share your thoughts without providing any personal information.</p>
              <p></p>
            </div>
            <img src={Freelance} className='img-fluid w-25 m-md-5 m-2'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
