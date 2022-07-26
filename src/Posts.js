import './App.css';
import Identicon from 'react-identicons';
import React, {Component , useState} from 'react';
import Post from './Post';

class Create extends Component {


  render() {
    
    return (
      <div>
        <div className='container-fluid bg-dark text-light border-bottom border-warning pt-2'>
          <div className='d-flex flex-column-reverse'>
            {
              this.props.posts 
              ?
              this.props.posts.map((post) => <Post className='m-2' key = {post.postTime} postTime={post.postTime} postOwner={post.postOwner} postContent={post.postContent} sendDonation={this.props.sendDonation}/>)
              :
              <></>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
