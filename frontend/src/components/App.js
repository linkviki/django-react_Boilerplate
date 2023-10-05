import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
      <HomePage />
    </div>
    );
    
  }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);



/*import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>testing React code</h1>;
}

const appDiv = document.getElementById('app');
ReactDOM.createRoot(appDiv).render(<App />)
*/