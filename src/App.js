import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://mern-apps.herokuapp.com/" target="_blank">
        <img src={logo} width="30" height="30" alt="Project Repository" />
        </a>
        <Link className="navbar-brand" to="/">MERN-Stack Todo App</Link>
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <Link to="/" className="nav-link">Todos</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Create</Link>
        </li>
        </ul>
      </nav>
      
      <Route path="/" exact component={TodosList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
      </div>
      
      </Router>
    );
  }
}

export default App;
