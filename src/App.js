import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';
import './charlie.jpg'
import { reset } from 'ansi-colors';

let message = 'OMELET'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false,
    reset: 0
  }
}

class App extends React.Component {

  state = prepareStateFromWord(message);

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }

  reset = () => {
    this.setState({
      reset: this.state.reset + 1,
      completed: !this.state.completed
    })
  }

  render() {
    return (
      <div className="text">
        <div>
          <h1> 3SA03 </h1>      
          <h4>PARICHAT KRUETIAW 6035512076 </h4>    
          {
            Array.from(this.state.chars).map((item, index) => (
              <CharacterCard
                value={item}
                key={index}
                activationHandler={this.activationHandler}
                attempt={this.state.attempt}
                reset={this.state.reset}
              />
            ))
          }
          <div className="select">
            <h2>START GAME </h2>
            {
              Array.from(this.state.guess).map((item, index) => (
                <CharacterCard
                  value={item}
                  key={index}
                  activationHandler={this.activationHandler}
                />
              ))
            }
            <div> <h4> ATTEMPT {this.state.attempt}</h4></div>
            {
              this.state.completed && <h2>WINNER!! :)</h2>
            }

            {
              this.state.completed && <button onClick={this.reset}>RESTART</button>
            }


          </div>
        </div>
      </div>
    )
  }
}


export default App;