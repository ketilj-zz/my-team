import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Rebase from 're-base';
import Match from './Match';
const base = Rebase.createClass('https://teamkom.firebaseio.com');

export default class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedMatches: []
    };
  }
  componentWillMount() {
    this.ref = base.syncState('matches', {
      context: this,
      state: 'storedMatches',
      asArray: true
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  render() {
    const matchesToShow = this.state.storedMatches.map( (item, index) => {
      return (
        <Match item={item} key={index} />
      );
    });
    return (
      <div className="container">
        <h1>Matches</h1>
        <Helmet title="Kamper"/>
        <ul>{matchesToShow}</ul>
      </div>
    );
  }
}
