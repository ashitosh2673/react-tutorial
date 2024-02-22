import React from "react";

class Child extends React.Component {
  constructor(props) {
    console.log("Child : Mounting ===> Constructor");
    super(props);
    this.state = {
      counter: 0,
      data: [],
      loading: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child : Mounting ===> getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({ counter: 1 });
    }, 3000);
    console.log("Child : Mounting ===> componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child : Updating ===> shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Child : Updating ===> getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Child : Updating ===> componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child : Unmounting ===> componentWillUnmount");
    clearTimeout(this.timer);
  }

  render() {
    console.log("Child : Mounting ===> Updating ===> render");
    return (
      <div>
        <h1>This is child Component</h1>
      </div>
    );
  }
}

export default Child;
