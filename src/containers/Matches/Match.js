import React, { Component, PropTypes} from 'react';

export default class Match extends Component {
  static propTypes = {
    item: PropTypes.object
  }
  render() {
    const {item} = this.props;
    const homeTeam = item.homeTeam;
    return (
        <li>{homeTeam}</li>
    );
  }
}
