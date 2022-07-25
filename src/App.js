import './App.css';
import React, {Component , useState} from 'react';
import Web3 from 'web3';
// import Identicon from 'react-identicons';
import Landing from './Landing.js';
import Navbar from './Navbar.js'
import Start from './Start.js';
import Create from './Create.js';
import Posts from './Posts.js';

class App extends Component {

  connectWallet = async () => {
    await this.loadWeb3()
    // await this.loadBlogContract()
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    
    window.ethereum.on('accountsChanged', function (accounts) {
      const account = accounts[0]
      console.log(account)
      this.setState({ account })
    }.bind(this));
    // await this.getAllPosts()
    console.log(window.web3)
  }

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      const web3 = window.web3
      this.setState({ web3 })
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  // loadBlogContract =  async () => {
  //   if (!this.state.web3) {
  //     console.log("Web3 is not defined")
  //     return
  //   }
  //   const abi = Blog.abi
  //   const networkId = await this.state.web3.eth.net.getId()
  //   const blogContractData = Blog.networks[networkId]

  //   const blogContract = new this.state.web3.eth.Contract(abi, blogContractData.address)
  //   this.setState({ blogContract })

  // }

  // disconnectWallet =  () => {

  //   this.setState( {      account : null,
  //                         web3 : null,
  //                         posts : null,
  //                         blogContract : null,
  //                         loading : false
  //                   })
  // }


  // getAllPosts = async () => {
  //   if (!this.state.blogContract) {
  //     console.log("No contract")
  //     return
  //   }
  //   const posts = await this.state.blogContract.methods.getPosts().call()
  //   this.setState({ posts })
  //   console.log(this.state.posts)
  // }

  // addPost = async (text) => {
  //   if (!this.state.blogContract) {
  //     console.log("No contract")
  //     return
  //   }
  //   if (!text) {
  //     alert("You can't post an empty string.")
  //     return
  //   }

  //   console.log(text)
  //   this.setState( {loading : true})
  //   const cont = "qwerty"
  //   const tx = await this.state.blogContract.methods.postNewPost(text, this.state.account).send({from : this.state.account}).then(function(receipt){
  //     console.log("Transaction is mined with txHash : ")
  //     console.log(receipt.transactionHash)
      
  //   }).catch((e)=>{
  //       console.log("Canceleld by usred")
  //       console.log(e.code)
  //     })
  //     await this.getAllPosts()
  //     this.setState( {loading : false})
  // }


  // getCurrentUsersPosts = async (argument) => {
  //   if (!this.state.blogContract) {
  //     console.log("No contract")
  //     return
  //   }

  //   const posts = await this.state.blogContract.methods.getPostsForCurrentUser().call({from : argument ? argument : this.state.account})
  //   this.setState({ posts })
  //   console.log(posts)
  //   console.log(this.state.posts)
  // }

  constructor(props) {
    super(props)
    this.state = {
      account : null,
      web3 : null,
      posts : null,
      blogContract : null,
      loading : false
    }


  }


  render() {
    
    return (
      <div>
        
        {/* Navbar */}
        <Navbar account={this.state.account}></Navbar>
        
        {this.state.account ?
        <Posts></Posts>

        :
        <div>
        <Landing></Landing>
        <Start connectWallet={this.connectWallet}></Start>

        </div>

        }


{/* 
        App Inner
        <div className='container-fluid bg-dark text-light border-bottom border-warning pt-2'>
          <div className='d-flex flex-column'>
            <div className='d-flex align-items-center justify-content-center'>
              <h1 className='p-1 m-1'>Heading</h1>
              <Identicon className="m-1" string={0x868b115FE2F462D28Ecd925a56637699d6961e4f} size={25}></Identicon>
            </div>
            <p className='p-1 m-1'> It is a long established fact that a reader will be distracted by the readable content
             of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
             distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
             <p className='p-1 m-1 border-bottom border-secondary text-break'>0x868b115FE2F462D28Ecd925a56637699d6961e4f</p>
          </div>
          <div className='d-flex flex-column'>
            <h1 className='p-1 m-1'>Heading</h1>
            <p className='p-1 m-1'> It is a long established fact that a reader will be distracted by the readable content
             of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
             distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
             <p className='p-1 m-1 border-bottom border-secondary text-break'>0x868b115FE2F462D28Ecd925a56637699d6961e4f</p>
          </div>
          <div className='d-flex flex-column'>
            <h1 className='p-1 m-1'>Heading</h1>
            <p className='p-1 m-1'> It is a long established fact that a reader will be distracted by the readable content
             of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
             distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
             <p className='p-1 m-1 border-bottom border-secondary text-break'>0x868b115FE2F462D28Ecd925a56637699d6961e4f</p>
          </div>
          <div className='d-flex flex-column'>
            <h1 className='p-1 m-1'>Heading</h1>
            <p className='p-1 m-1'> It is a long established fact that a reader will be distracted by the readable content
             of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
             distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
             <p className='p-1 m-1 border-bottom border-secondary text-break'>0x868b115FE2F462D28Ecd925a56637699d6961e4f</p>
          </div>
          <div className='d-flex flex-column'>
            <h1 className='p-1 m-1'>Heading</h1>
            <p className='p-1 m-1'> It is a long established fact that a reader will be distracted by the readable content
             of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
             distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
             <p className='p-1 m-1 border-bottom border-secondary text-break'>0x868b115FE2F462D28Ecd925a56637699d6961e4f</p>
          </div>
          <div className='d-flex flex-column'>
            <h1 className='p-1 m-1'>Heading</h1>
            <p className='p-1 m-1'> It is a long established fact that a reader will be distracted by the readable content
             of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
             distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
             <p className='p-1 m-1 border-bottom border-secondary text-break'>0x868b115FE2F462D28Ecd925a56637699d6961e4f</p>
          </div>
          
        </div> */}

      </div>
    );
  }
}

export default App;
