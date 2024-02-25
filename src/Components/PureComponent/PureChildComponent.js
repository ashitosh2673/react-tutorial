import React, { PureComponent } from "react";

class PureChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((data) => this.setState({ data: data, loading: false }))
    //     .catch((error) => console.log("error", error));
  }

  render() {
    console.log("PureChildComponent ===> render");
    return (
      <div>
        <h1>This is Pure Child Component</h1>
      </div>
    );
  }
}

export default PureChildComponent;
