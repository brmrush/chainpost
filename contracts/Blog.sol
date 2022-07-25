// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Blog {


  uint public totalPosts;
  address public dev;


constructor() {
        dev = msg.sender;

        totalPosts = 0;
    }

  
  struct Post{
    uint postId;
    uint postTime;
    string postContent;
    address postOwner;
  }


  Post[] posts;

  mapping(address => Post[]) addressToPostArray;
  mapping(uint => Post) idToPost;


  function postNewPost(string memory _postContent, address _postOwner) public {
    Post memory newPost = Post(totalPosts, block.timestamp, _postContent, _postOwner);
    addressToPostArray[msg.sender].push(newPost);
    idToPost[totalPosts] = newPost;
    totalPosts++;
    posts.push(newPost);

  }

  function getPosts() public view returns (Post[] memory) {
    return posts;
  }

  function getPostsForCurrentUser() public view returns (Post[] memory) {
    return addressToPostArray[msg.sender];
  }

  function getPostsForSpecificUser(address _address) public view returns (Post[] memory) {
    return addressToPostArray[_address];
  }

  function getPostWithId(uint _postId) public view returns (Post memory) {
    return idToPost[_postId];
  }


}