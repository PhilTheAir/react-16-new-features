import React, { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    return (
      <Fragment>
        {
          this.state.error ? (
            <h2>Something went wrong.</h2>
          ) : this.props.children
        }
      </Fragment>
    );
  }
}

export default ErrorBoundary;