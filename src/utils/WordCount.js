import React from 'react';
import { TextField } from "@mui/material";

export default class  WordCount extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstValue: '',
      secondValue: '',
      needWords: '',
      wordCount: '',
      limWords: null,
    }
    this.firstHandle = this.firstHandle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.secondHandle = this.secondHandle.bind(this)    
  }
  firstHandle(e){
    this.setState({
      firstValue: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({
      needWords: this.state.firstValue
    })
  }

  secondHandle(event){
    this.setState({
      secondValue: event.target.value,
      wordCount: event.target.value === '' ? 0 : this.state.secondValue.split(' ').length,
    })
  }

  render(){
    var result = this.state.wordCount;
    return(
     <div>
        <TextField 
          type="text"
          value={this.state.value}
          onChange={this.secondHandle}
          variant = "outlined"
          color = "primary"
          multiline
          minRows = "10"
          placeholder = "Start typing"
          fullWidth>
        </TextField>
        <p>You have written {result} words</p>
      </div>
    );
  }
}