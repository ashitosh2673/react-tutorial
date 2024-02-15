import React from "react";
import "./App.css";

// JSX (JavaScript XML) is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.1

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello World this my first react application s</h1>
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello, World!</h1>
        </header>
        <header className="App-header">
          <h1>Hello, World!</h1>
        </header>
        <header className="App-header">
          <h1>Hello, World!</h1>
        </header>
      </div>
    );
  }
}
export default App;
