// @flow
import * as React from 'react';
import Other from '../Other';
import Cars from '../Cars';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.scss';

type Props = {

}

type State = {
  number: number,
  cards: Array<{suit: string} | {rank: number}>,
}

class Example extends React.Component <Props, State>{
  state = {
    number: 0,
    cards: [
      {suit: 'hearts', rank: '5'},
      {suit: 'clubs', rank: '2'},
      {suit: 'diamonds', rank: '3'},
    ],
    cars: [
      {make: 'lambo', model: 'spyder', color: 'orange'},
      {make: 'ferrari', model: '458', color: 'red'},
      {make: 'vauxhall', model: 'astra', color: 'black'},
      {make: 'fiat', model: 'punto', color: 'red'},
      {make: 'ferrari', model: '457', color: 'blue'},
      {make: 'renault', model: 'clio', color: 'yellow'},
    ]
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   if(this.state.number != nextState.number){
  //     return true;
  //   }
  //   else {
  //     return false
  //   }
  // }

  update = () => {
    this.setState({number: this.state.number + 1})
  }

  drawCard = () => {
    this.setState({cards: this.state.cards.slice(1)})
  }


  render() {
    return (
      <Router>
        <div className="container">
          <div className="shouldComponentUpdateContainer">
            number: {this.state.number}
            <button onClick={this.update}>increment</button>
            <Other
              number={this.state.number}
            />
          </div>
          <div className="mixinsContainer">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <Link to="/cars">Cars</Link>
          <Route
            path="/cars"
            render={(props) => (
              <Cars
                {...props}
                cars={this.state.cars}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Example;
