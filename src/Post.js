import './App.css';
import Identicon from 'react-identicons';
import React, {Component , useState} from 'react';


class Post extends Component {


  handleDonateClick = (event) => {
    event.preventDefault()
    
    this.props.sendDonation(this.state.amount, this.props.postOwner)
  }


  constructor(props) {
    super(props)
    this.state = {
      amount : null
    }
  }

  render() {
    
    return (
      <div className='d-md-flex flex-column justify-content-center align-items-center text-center'>
            <div className='text-start'>
              <Identicon className="m-1" string={this.props.postOwner} size={25}></Identicon>

            </div>
            <p className='p-1 m-1 raleway text-start'>{this.props.postContent}</p>
            <div className='d-flex align-items-center justify-content-center text-start '>
              <input className='bg-dark border border-light border-1 rounded m-1 w-25 text-light fw-bold raleway' 
              onChange={(e) => this.setState({amount : e.target.value})} type="number" min={0} data-bind="value:replyNumber"></input>
              <button className='btn btn-warning btn-sm m-1' onClick={this.handleDonateClick} ><i className='bi bi-cash-coin p-1'>Donate</i></button>
            </div>
            <p className='p-1 m-1 border-bottom border-secondary text-break text-secondary text-start'>{this.props.postOwner.slice(0,30)}...</p>
          </div>
    );
  }
}

export default Post;
