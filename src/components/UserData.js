import React, { Component, useEffect, useState } from "react";
import "./styles.css";
import Circle from "./Circle"
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
        this.setState({easyProblems: JSON.stringify(data[0].Easy), mediumProblems: JSON.stringify(data[0].Medium), hardProblems: JSON.stringify(data[0].Hard), listOfProblems: JSON.stringify(data[0].problemsSolved)})
      })
    }
    render(){
      const easy = this.state.easyProblems;
      const medium = this.state.mediumProblems;
      const hard = this.state.hardProblems;
      //const problems = this.state.listOfProblems;
      //console.log("problem length:", problems.length);
      /*for (let i=0; i<this.state.listOfProblems.length; i++)
      {
        var fetchURL = window.location.href;
        fetchURL = fetchURL.replace("profile", "codesnippetID/");
        fetchURL += this.state.listOfProblems[i];
        fetch(fetchURL)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          problems[i] = data.name;
        })
      }*/
        return(
            <>
                <h1>Welcome back {this.state.user.fullName}!</h1>
                <div style={{alignItems: "center"}}>
                  <Circle percentage={(100 * easy/15).toFixed(1)} strokeWidth={7} text="Easy" primaryColor={["#AAFFB9", "#AAFFB9"]} secondaryColor="#F0F0F0"/>
                  <Circle percentage={(100 * medium/9).toFixed(1)} text="Medium" strokeWidth={7} secondaryColor="#F0F0F0"/>
                  <Circle percentage={(100 * hard/6).toFixed(1)} text="Hard" strokeWidth={7} primaryColor={["#EB1547", "#EB1547"]} secondaryColor="#F0F0F0"/>
                </div>
                <br />
            </>
            );
    }
}
export default UserData;