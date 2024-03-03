import React, { PureComponent } from "react";
import PureChildComponent from "./PureChildComponent";
import ReactMemoComponent from "./ReactMemoComponent";

// PureComponent is exactly the same as Component, but it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

// There is some drawback of using PureComponent. It does a shallow comparison of state and props, so if these are deeply nested objects or arrays, it may not re-render when you expect it to. Also, it does not implement shouldComponentUpdate lifecycle method. It only does a shallow comparison of state and props, and if you need to do a deep comparison, you'll have to implement shouldComponentUpdate yourself.
class PureParentComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: [],
      loading: true,
    };
  }

  // Shalllow copy of object
  //  object1 = { name: "John", age: 30 };
  //  object2 = { ...object1};

  // Deeps copy of object
  // object1 = { name: "John", age: 30 };
  // object2 = JSON.parse(JSON.stringify(object1));

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data, loading: false }))
      .catch((error) => console.log("error", error));
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("PureParentComponent : Updating ===> shouldComponentUpdate");
  //   return nextState.counter !== this.state.counter;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("PureParentComponent : Updating ===> componentDidUpdate");
    this.state.counter < 10 &&
      this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log("PureParentComponent ===> render");
    const { data, loading, counter } = this.state;
    return (
      <div>
        <h1>This is Pure Parent Component</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <PureChildComponent count={this.state.counter} data={data} />
            <ReactMemoComponent count={0} />
          </>
        )}
      </div>
    );
  }
}

export default PureParentComponent;
