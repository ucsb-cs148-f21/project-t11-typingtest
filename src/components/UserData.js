import React, { Component, useEffect, useState } from "react";
import "./styles.css";
import getUser from "../utils/get-user";

const user = getUser();

class UserData extends Component {
  state = {
    easyProblems: 0,
    mediumProblems: 0,
    hardProblems: 0,
    listOfProblems: []
  };

  componentDidMount(){
    var fetchURL = window.location.href
    fetchURL = fetchURL.replace("practice", "codesnippetID/")
    fetchURL += this.state.textID
    console.log(fetchURL)
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(this.state.text)
        this.setState({easyProblems: JSON.stringify(data.Easy), mediumProblems: JSON.stringify(data.Medium), hardProblems: JSON.stringify(data.Hard), listOfProblems: JSON.stringify(data.problemsSolved)})
      })
    }

    render(){
        const {
            easyProblems,
            mediumProblems,
            hardProblems,
            listOfProblems
          } = this.state;

        return(
            <>
                <h1>Welcome back {user.fullName}!</h1>
                <div>
                Number of easy problems completed: {easyProblems}
                </div>
                Number of medium problems completed: {mediumProblems}
                <div>
                Number of hard problems completed: {hardProblems} 
                </div>
                List of problems completed: {listOfProblems}
                <br />
            </>
            );
            
    }
}

export default UserData;