import React, { PureComponent } from "react";
import PureChildComponent from "./PureChildComponent";
class PureParentComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data, loading: false }))
      .catch((error) => console.log("error", error));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("PureParentComponent : Updating ===> componentDidUpdate");
    this.setState({ counter: 0 });
  }

  render() {
    console.log("PureParentComponent ===> render");
    return (
      <div>
        <h1>This is Pure Parent Component</h1>
        <PureChildComponent data={this.state.data} />
      </div>
    );
  }
}

export default PureParentComponent;
