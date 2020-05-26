import React from 'react';
import './App.css';


const VERB_AND_AUTHOR = "abcdefghijklmnopqrstuvwxyz".split("").map(letter => {
  return {
    author: letter,
    text: ((letter) => {var str = ""; for (let i=0; i<30; i++) {str+=letter}; return str})(letter)
  }
});

const ChangeRandom = (num) => {
  return parseInt(Math.random() * num);
}

//React

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: ChangeRandom(VERB_AND_AUTHOR.length),
      color: ChangeRandom(7)
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState(
      {
        random: ChangeRandom(VERB_AND_AUTHOR.length),
        color: ChangeRandom(7)
      }
    );
  }

  render() {
    return (
    <div className="colored" id="scene">
      <div className="noncolor" id="quote-box">
        <p className="colored" id="text">
          {VERB_AND_AUTHOR[this.state.random]["text"]}
          <p className="transparent" id="author">{VERB_AND_AUTHOR[this.state.random]["author"]}</p>
        </p>
        <br/>
        <a className="colored" href="https://twitter.com/intent/tweet" id="tweet-quote">
          <i>333</i>
        </a>
        <button 
          className="colored" 
          id="new-quote"
          onClick={this.handleClick} 
        >
          换一个
        </button>
      </div>
    </div>
    );
  }
}


function App() {
  return <div>
    <Board />
  </div>
}

export default App;
