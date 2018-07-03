import React, { Component } from 'react';
import Portals from './Portals';
import Fragments from './Fragments';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortals: false
    };
  }

  handleShow = () => {
    this.setState({ showPortals: true });
  }

  handleHide = () => {
    this.setState({ showPortals: false });
  }

  throwError = () => {
    throw new Error('crashed!');
  }

  render() {
    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show Portals</button>
        {
          this.state.showPortals ? (
            <ErrorBoundary>
              <Portals>
                <div className="modal">
                  <Fragments />
                  This is being rendered inside the #modal-container div.
                  <button onClick={this.handleHide}>Hide Portals</button>
                  <button onClick={this.throwError}>Throw Error</button>
                </div>
              </Portals>
            </ErrorBoundary>
          ) : null
        }
      </div>
    );
  }
}

export default App;
