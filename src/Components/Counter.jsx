import React, { useState } from "react";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     counter < 10 && setCounter(counter + 1);
//   };

//   const decrement = () => {
//     counter > 0 && setCounter(counter - 1);
//   };

//   return (
//     <>
//       <h1>Counter</h1>
//       <h2>{counter}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </>
//   );
// };

// export default Counter;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
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
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default Counter;
