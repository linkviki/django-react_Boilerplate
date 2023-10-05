import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    useParams,
    Route,
    Routes,
    Link,
    Redirect,
  } from "react-router-dom";



export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <Router>
        <Routes>
        <Route path="/" element={<p>This is a Home Page!</p>} />
        </Routes>
        </Router>
    
        );
    
  }
}
