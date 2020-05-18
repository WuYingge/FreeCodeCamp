import React from 'react';
import './App.css';
import Redux from "rudux";

const NumberOfProverb = 30;
const changeRandom = (NumberOfProverb) => parseInt(Math.random()*NumberOfProverb);

//Redux:
const NEWQUOTE = "NEWQUOTE";

const reduxReducer = (state={}, action) => {
  switch (action.type) {
    case NEWQUOTE:
      return {seed: changeRandom(NumberOfProverb)};
    default: 
      return state;
  }
}

const requestANewQuote = () => {
  return {
    type: NEWQUOTE
  };
}

const store = Redux.createStore();

//React

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    return changeRandom();
  }


  render() {
    return <div className="colored" id="scene">
      <div className="noncolor" id="quote-box">
        <p className="transparent" id="text">
          测试
          <p className="transparent" id="author">测试作者</p>
        </p>
        <br/>
        <a className="transparent" href="https://twitter.com/intent/tweet" id="tweet-quote">
          <i>333</i>
        </a>
        <button 
          className="transparent" 
          id="new-quote"
          onClick={this.handleClick}
        >
          换一个
        </button>
      </div>
    </div>;
  }
}

function App() {
  return <div>
    <Board />
  </div>;
}

export default App;
