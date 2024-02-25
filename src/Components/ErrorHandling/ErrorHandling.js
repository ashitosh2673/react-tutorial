import React, { Component } from "react";

class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    console.log("ErrorHandling ===> Constructor");
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI. This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component. It receives the error that was thrown as a parameter and should return a value to update state.
    console.log("ErrorHandling ===> getDerivedStateFromError", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service. This method is called after a component throws an error. It receives two parameters: error and errorInfo and is used for side effects. It is not used for updating the state of the component or to make API calls or to update the props of the component.
    console.error(
      "ErrorHandling ==> Error caught by ErrorBoundary:",
      error,
      errorInfo
    );
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorHandling;
