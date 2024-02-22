// Life Cycle Method of React Component
import React, { Component } from "react";

class ComponentLifeCycle extends Component {
  constructor(props) {
    // Constrcuter is the first method that is called when a component is created, and it is called only once
    // It is used to initialize the state of the component
    // It is also used to bind the event handlers to the component
    console.log("Mounting ===> Constructor");
    super(props);
    this.state = {
      counter: 0,
      data: [],
      loading: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // getDerivedStateFromProps is called before every render
    // It is used to update the state of the component based on the changes in the props
    // It is a static method, so it does not have access to the 'this' keyword
    // It is a rarely used method
    console.log("Mounting ===> Updating ===> getDerivedStateFromProps");
    return props.name === "IT Shaala"
      ? { counter: state.counter, name: props.name }
      : { counter: 0, name: null };
  }

  componentDidMount() {
    // componentDidMount is called after the component is rendered for the first time
    // It is used to make API calls, update the state of the component, or to add event listeners
    // It is called only once
    console.log("Mounting ===> componentDidMount");
    // fetch api call

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data, loading: false }))
      .catch((error) => console.log("error", error));
  }

  shouldComponentUpdate(nextProps, nextState) {
    // shouldComponentUpdate is called before the component is re-rendered
    // It is used to decide whether the component should re-render or not
    // It is called every time the component is re-rendered
    // It returns a boolean value

    console.log("Updating ===> shouldComponentUpdate");
    return nextState.data?.length !== this.state.data.length;
    // return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // getSnapshotBeforeUpdate is called before the changes from the virtual DOM are to be reflected in the actual DOM
    // It is used to capture some information from the DOM
    // It is called before the render method
    // It returns a value or null
    console.log("Updating ===> getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Updating ===> componentDidUpdate");
    fetch("https://jsonplaceholder.typicode.com/posts?search=react")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data, loading: false }))
      .catch((error) => console.log("error", error));
  }

  componentWillUnmount() {
    console.log("Unmounting Phase  => Component Unmounted");
  }

  increment = () => {
    this.state.counter < 10 &&
      this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.state.counter > 0 &&
      this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log("Mounting ===> Updating ===> Render => thi.state", this.state);
    console.log("Mounting ===> Updating ===> Render => this.props", this.props);
    console.log("Mounting Phase  => Component mounted");
    return (
      <>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {" "}
            <h1>Counter</h1>
            <h2>{this.state.counter}</h2>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <h1>API Data</h1>
            <ul>
              {this.state.data.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default ComponentLifeCycle;

// Phases of Life Cycle Method
// 1. Mounting Phase : When an instance of a component is being created and inserted into the DOM
// 1.1. constructor()
// 1.2. static getDerivedStateFromProps()
// 1.3. render()
// 1.4. componentDidMount()

// 2. Updating Phase - re-render : When a component is being re-rendered as a result of changes to either its props or state
// 2.1. static getDerivedStateFromProps() - This method is called before every render
// 2.2. shouldComponentUpdate()- This method is called before the component is re-rendered
// 2.3. render() - This method is called when the component is re-rendered
// 2.4. getSnapshotBeforeUpdate() - This method is called before the changes from the virtual DOM are to be reflected in the actual DOM
// 2.5. componentDidUpdate() - This method is called after the component is re-rendered

// 3. Unmounting Phase : When a component is being removed from the DOM
// 3.1. componentWillUnmount() - This method is called before the component is removed from the DOM. It is used to clean up the memory, also to remove event listeners, and to cancel network requests or subscriptions or remove timers

// 4. Error Handling Phase : When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
// static getDerivedStateFromError()
// componentDidCatch()
