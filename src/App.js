import React from 'react';
import SeasonDetail from './SeasonDetail.jsx';

export default class App extends React.Component {
  state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <h1>WEATHER APP </h1>
          <SeasonDetail lat={this.state.lat} />
        </div>
      );
    }
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          {' '}
          <h1>Warning </h1>
          {this.state.errorMessage}
        </div>
      );
    }
    return <div> loading</div>;
  }
}
