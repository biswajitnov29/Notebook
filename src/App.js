import React, { Component } from 'react';
import NoteEditor from './note-editor/note-editor';
// import NoteHeader from './note-header/note-header';
import NoteDashboard from './note-dashboard/note-dashboard.js';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="#"><Link className="nav-link" to={'/'}>Dashboard</Link></a> */}
                  <Link className="nav-link" to={'/'}>Dashboard</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#"><Link to={'/newnote'}>Add New</Link></a> */}
                  <Link className="nav-link" to={'/newnote'}>Add New</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={NoteDashboard} />
            <Route exact path='/newnote' component={NoteEditor} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
