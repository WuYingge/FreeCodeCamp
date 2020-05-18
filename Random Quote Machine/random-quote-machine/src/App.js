import React from 'react';
import './App.css';
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

const INITIALNUMBER = Math.random();

const VERB_AND_AUTHOR = "abcdefghijklmnopqrstuvwxyz".split("").map(letter => {
  return {
    author: letter,
    text: ((letter) => {var str = ""; for (let i=0; i<30; i++) {str+=letter}; return str})(letter)
  }
});
const NumberOfProverb = VERB_AND_AUTHOR.length;
const INITIALSTATEGENERATOR = (random) => {
  return {
  seed: parseInt(random*NumberOfProverb),
  color: parseInt(random*7)
  }
};
const INITIALSTATE = INITIALSTATEGENERATOR(INITIALNUMBER);


//Redux:
const NEWQUOTE = "NEWQUOTE";

const reduxReducer = (state=INITIALSTATE, action) => {
  switch (action.type) {
    case NEWQUOTE:
      return {seed: action.seed,
      color: action.color};
    default: 
      return state;
  }
}



const requestANewQuote = (random) => {
  
  return {
    type: NEWQUOTE,
    seed: parseInt(random * VERB_AND_AUTHOR.length),
    color: parseInt(random * 7)
  };
}

const store = createStore(reduxReducer);
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: random => { 
      return dispatch(requestANewQuote(random))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    seed: state.seed,
    color: state.color
  };
}



//React

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: Math.random()
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState(
      {random: Math.random()}
    );
  }

  render() {
    return <div className="colored" id="scene">
      <div className="noncolor" id="quote-box">
        <p className="transparent" id="text">
          {VERB_AND_AUTHOR[this.props.seed]["text"]}
          <p className="transparent" id="author">{VERB_AND_AUTHOR[this.props.seed]["author"]}</p>
        </p>
        <br/>
        <a className="transparent" href="https://twitter.com/intent/tweet" id="tweet-quote">
          <i>333</i>
        </a>
        <button 
          className="transparent" 
          id="new-quote"
          onClick={this.props.handleClick(this.state.random)}
          onClick={this.handleClick} 
        >
          换一个
        </button>
      </div>
    </div>;
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Board);


function App() {
  return <Provider store={store}>
    <Container />
  </Provider>;
}

export default App;
