import React, { Component, useEffect, useState } from "react";
import "./styles.css";


class UserData extends Component {
  state = {
    user: this.props.user,
    easyProblems: 0,
    mediumProblems: 0,
    hardProblems: 0,
    listOfProblems: []
  };

  componentDidMount(){
    var fetchURL = window.location.href
    fetchURL += '/'
    fetchURL += this.state.user.id.toString().substr(0, 17)
    console.log(fetchURL)
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({easyProblems: JSON.stringify(data.Easy), mediumProblems: JSON.stringify(data.Medium), hardProblems: JSON.stringify(data.Hard), listOfProblems: JSON.stringify(data.problemsSolved)})
      })
    }

    render(){
      console.log(this.state.easyProblems);
      const easy = this.state.easyProblems;
      const medium = this.state.mediumProblems;
      const hard = this.state.hardProblems;
      const problems = this.state.listOfProblems;
        return(
            <>
                <h1>Welcome back {this.state.user.fullName}!</h1>
                <div>
                Number of easy problems completed: {easy}
                </div>
                Number of medium problems completed: {medium}
                <div>
                Number of hard problems completed: {hard} 
                </div>
                List of problems completed: {problems}
                <br />
            </>
            );
            
    }
}

export default UserData;