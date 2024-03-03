import React, { useState } from "react";

const WithLikesCycleHOC = (WrappedComponent) => {
  return function WithLikesCycle(props) {
    const [likes, setLikes] = React.useState(0);

    const addLikes = () => {
      console.log("Likes");
      setLikes(likes + 1);
    };
    const addDislikes = () => {
      console.log("Dislikes");
      setLikes(likes - 1);
    };

    return (
      <WrappedComponent
        {...props}
        likes={likes}
        addLikes={addLikes}
        addDislikes={addDislikes}
      />
    );
  };
};

export default WithLikesCycleHOC;

//  Above HOC with class component
// import React, { Component } from "react";

// const WithLikesCycleHOC = (WrappedComponent) => {
//   return class WithLikesCycle extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         likes: 0,
//       };

//       this.addLikes = this.addLikes.bind(this);
//       this.addDislikes = this.addDislikes.bind(this);
//     }

//     addLikes() {
//       console.log("Likes");
//       this.setState({ likes: this.state.likes + 1 });
//     }
//     addDislikes() {
//       console.log("Dislikes");
//       this.setState({ likes: this.state.likes - 1 });
//     }

//     render() {
//       return (
//         <WrappedComponent
//           {...this.props}
//           likes={this.state.likes}
//           addLikes={this.addLikes}
//           addDislikes={this.addDislikes}
//         />
//       );
//     }
//   };

// };

// export default WithLikesCycleHOC;
