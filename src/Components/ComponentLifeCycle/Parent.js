import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    console.log("Parent : Mounting ===> Constructor");
    super(props);
    this.state = {
      showChild: true,
    };
    this.showChild = this.showChild.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parent : Mounting ===> getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    this.setState({ counter: 1 });
    console.log("Parent : Mounting ===> componentDidMount");
  }

  //    ------------------ Mounting phase ends here ------------------
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent : Updating ===> shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Parent : Updating ===> getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent : Updating ===> componentDidUpdate");
  }

  //   ------------------ Updating phase ends here ------------------

  componentWillUnmount() {
    console.log("Parent : Unmounting ===> componentWillUnmount");
  }

  showChild = () => {
    this.setState({ showChild: !this.state.showChild });
  };

  render() {
    console.log("Parent : Mounting ===> Updating ===> render");
    return (
      <div>
        <h1>This is Parent Component {this.state.counter}</h1>
        {this.state.showChild ? (
          <>
            <Child />
            <button onClick={this.showChild}>Unmount Child</button>
          </>
        ) : (
          <button onClick={this.showChild}>Mount Child</button>
        )}
      </div>
    );
  }
}

export default Parent;
