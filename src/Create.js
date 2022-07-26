import './App.css';
import React, {Component , useState} from 'react';


class Create extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content : null
    }
  }

  handleShareClick = (event) => {
    event.preventDefault()
    if (!this.state.content || this.state.content.length < 10) {
      alert("Message should be atleast 10 characters.")
      return
    }
    this.props.addPost(this.state.content)
  }

  render() {
    
    return (
      <div>
        <div className='container-fluid bg-dark text-light border-bottom border-warning pt-2'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <textarea className='fw-bold m-1 border-1 border-light text-light bg-dark rounded raleway' placeholder="Your content here" cols="40" rows="4" minLength="10" maxLength="500" onChange={(e) => this.setState({content : e.target.value})} required></textarea>
            {
              this.props.loading ?
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              :
              <div>
                <button type="submit" className="btn btn-primary" onClick={this.handleShareClick}>Share Post</button>
              </div>
                      
                      }
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
