import React, { useState } from "react";

// In React 16.8 and above, we can use hooks to use state and other features in functional components.

//  Why Hooks?
// 1. It's hard to reuse stateful logic between components - Hooks allow you to reuse stateful logic without changing your component hierarchy.
// 2. Complex components become hard to understand - Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.
// 3. Classes confuse both people and machines - Hooks let you use more of React's features without classes.
// 4. Hooks are backward-compatible - Hooks don't contain any breaking changes and they provide a way to use state and other React features without writing a class.
// 5. Hooks are more expressive - Hooks let you use more of React's features without classes.
// 6. Hooks are easier to understand - Hooks let you use more of React's features without classes.
// 7. Performance optimizations - Hooks provide more fine-grained control over when a component re-renders.

// useState is a Hook that lets you add React state to function components. It accepts an argument which is the initial state and returns an array of two elements. The first element is the current state and the second element is a function that lets you update it.

const HookDemo1 = (props) => {
  const [state, setState] = useState({
    count: 0,
    students: [
      { name: "Student 1", age: 10 },
      { name: "Student 2", age: 11 },
      { name: "Student 3", age: 12 },
    ],
  });

  //   const [likes, setLikes] = useState(0);
  //   const [dislikes, setDislikes] = useState(0);

  const incrementCount = () => {
    // set Previous state
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  const decrementCount = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  return (
    <div>
      <h1>HookDemo1 : {props.name} </h1>
      <spna>This is my count value : {state.count}</spna>
      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={() => decrementCount()}>Decrement</button>
    </div>
  );
};

export default HookDemo1;

// Same component with class component
// import React, { Component } from "react";

// class HookDemo1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>HookDemo1 : {this.props.name} </h1>
//         <spna>This is my count value : {this.state.count}</spna>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           Decrement
//         </button>
//       </div>
//     );

//   }
// }

// export default HookDemo1;
