import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectList from "./components/projectList";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to project land!</h1>
        <Route exact path="/" component={ProjectList} />
      </div>
    </Router>
  );
}

export default App;
