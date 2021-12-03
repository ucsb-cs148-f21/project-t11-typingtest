import React, { Component, useEffect, useState } from "react";
import "./styles.css";

class TypingComponent extends Component {
  state = {
    text: this.props.text,
    inputValue: "",
    lastLetter: "",
    words: [],
    completedWords: [],
    completed: false,
    startTime: undefined,
    timeElapsed: 0,
    wpm: 0,
    started: false,
    progress: 0,
    lineCount: 0,
    lineWCompleted: 0
  };
  componentDidMount(){
    console.log(this.state.text)
  }
  setText = () => {
    const wordsE = this.state.text.split(" ");
    const words = wordsE.filter(x => x != "");
    console.log(words);
    this.setState({
      words: words,
      completedWords: []
    });
  };

  startGame = () => {
    this.setText();

    this.setState({
      started: true,
      startTime: Date.now(),
      completed: false,
      progress: 0
    });
  };

  handleChange = e => {
    const { words, completedWords, lineWCompleted } = this.state;
    const inputValue = e.target.value;
    const lastLetter = inputValue[inputValue.length - 1];

    const currentWord = words[0];
    console.log(currentWord, "currentWord");

    // if space or '.', check the word
    if (lastLetter === " ") {
      // check to see if it matches to the currentWord
      // trim because it has the space
      if (inputValue.trim() === currentWord) {
        // remove the word from the wordsArray
        // cleanUp the input
        const newWords = [...words.slice(1)];
        console.log(newWords, "newWords");
        console.log(newWords.length, "newWords.length");
        const newCompletedWords = [...completedWords, currentWord];
        console.log(newCompletedWords, "newCompletedWords");
        console.log("----------------");
        const newLineWCompleted = lineWCompleted+1;

        // Get the total progress by checking how much words are left
        const progress =
          (newCompletedWords.length /
            (newWords.length + newCompletedWords.length)) *
          100;
        this.setState({
          words: newWords,
          completedWords: newCompletedWords,
          inputValue: "",
          completed: newWords.length === 0,
          progress: progress,
          lineWCompleted: newLineWCompleted
        });
      }
    } else {
      this.setState({
        inputValue: inputValue,
        lastLetter: lastLetter
      });
      console.log(this.state.inputValue, "this.state.inputValue");
      console.log(this.state.lastLetter, "this.state.lastLetter");
      console.log("================================");
    }

    this.calculateWPM();
  };

  _handleKeyPress = (e) => {
    const inputValue = e.target.value;
    if (e.key === 'Enter'){
      const { words, completedWords, lineCount, lineWCompleted } = this.state;

      const currentWord = words[0];
      console.log(currentWord, "currentWord");
      
      if (currentWord == inputValue + "\n"){
        const newWords = [...words.slice(1)];
        console.log(newWords, "newWords");
        console.log(newWords.length, "newWords.length");
        const newCompletedWords = [...completedWords, currentWord];
        console.log(newCompletedWords, "newCompletedWords");
        console.log("----------------");
        const newLineCount = lineCount+1;

        // Get the total progress by checking how much words are left
        const progress =
          (newCompletedWords.length /
            (newWords.length + newCompletedWords.length)) *
          100;
        this.setState({
          words: newWords,
          completedWords: newCompletedWords,
          inputValue: "",
          completed: newWords.length === 0,
          progress: progress,
          lineCount: newLineCount,
          lineWCompleted: 0
        });
      }
    }
    this.calculateWPM();
  } 

  calculateWPM = () => {
    const { startTime, completedWords } = this.state;
    const now = Date.now();
    const diff = (now - startTime) / 1000 / 60; // 1000 ms / 60 s
    console.log(now, "now");
    console.log(startTime, "startTime");
    console.log(diff, "diff");
    console.log("**************");

    // every word is considered to have 5 letters
    // so here we are getting all the letters in the words and divide them by 5
    // "my" shouldn't be counted as same as "deinstitutionalization"
    const wordsTyped = Math.ceil(
      completedWords.reduce((acc, word) => (acc += word.length), 0) / 5
    );
    console.log(completedWords, "completedWords");
    console.log(wordsTyped, "wordsTyped");
    console.log("+=+=+=+=+=+=");

    // calculating the wpm
    const wpm = Math.ceil(wordsTyped / diff);

    this.setState({
      wpm: wpm,
      timeElapsed: diff
    });
  };

  render() {
    const {
      text,
      inputValue,
      completedWords,
      wpm,
      timeElapsed,
      started,
      completed,
      progress,
      lineCount,
      lineWCompleted
    } = this.state;

    if (!started)
      return (
        <div className="container">
          <h2>Welcome to the Typing game</h2>
          <p>
            <strong>Rules:</strong> <br />
            Type in the input field the highlighted word. <br />
            The correct words will turn <span className="green">green</span>.
            <br />
            Incorrect letters will turn <span className="red">red</span>.
            <br />
            <br />
            Have fun!
          </p>
          <button className="start-btn" onClick={this.startGame}>
            Start game
          </button>
        </div>
      );

    if (!text) return <p>Loading...</p>;

    if (completed) {
      return (
        <div className="container">
          <h2>
            Your WPM is <strong>{wpm}</strong>
          </h2>
          <button className="start-btn" onClick={this.startGame}>
            Play again
          </button>
        </div>
      );
    }

    return (
      <div>
        <div className="wpm">
          <strong>WPM: </strong>
          {wpm}
          <br />
          <strong>Time: </strong>
          {Math.floor(timeElapsed * 60)}s
        </div>
        <div className="container">
          <h4>Type the text below</h4>
          <progress value={progress} max="100" />
          <p className="text">
            {text.split("\n").map((line, li_idx) => {
              return(
              <div key = {li_idx}>
              {line.split(" ").map((word, w_idx) => {
                let highlight = false;
                let currentWord = false;

                // this means that the word is completed, so turn it green
                if (lineWCompleted > w_idx || li_idx < lineCount) {
                  highlight = true;
                }

                if (lineWCompleted === w_idx && lineCount == li_idx) {
                  currentWord = true;
                }

                return (
                  <span
                    className={`word 
                                  ${highlight && "green"} 
                                  ${currentWord && "underline"}`}
                    key={w_idx}
                  >
                    {word.split("").map((letter, l_idx) => {
                      const isCurrentWord = w_idx === lineWCompleted && li_idx == lineCount;
                      const isWronglyTyped = letter !== inputValue[l_idx] && li_idx == lineCount;
                      const shouldBeHighlighted = l_idx < inputValue.length && li_idx == lineCount;

                      return (
                        <span
                          className={`letter ${
                            isCurrentWord && shouldBeHighlighted
                              ? isWronglyTyped
                                ? "red"
                                : "green"
                              : ""
                          }`}
                          key={l_idx}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
              </div>
              );
            })}
            </p>
          <input
            type="text"
            onChange={this.handleChange}
            onKeyPress={this._handleKeyPress}
            value={inputValue}
            // autoFocus={started ? 'true' : 'false'}
            autoFocus={true}
          />
        </div>
      </div>
    );
  }
}

export default TypingComponent;