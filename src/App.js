import React, { Component } from 'react';
import './App.css';

//Component
import Companies from './components/Companies'
import Nav from './components/Nav'
import Company from './components/Company'

class App extends Component {

  
  render() {

    let appStyle = {
      container: {
        marginTop: 80
      }

    }
    return (
      <div className="App container-fluid">
        <Nav />
        <div style={appStyle.container} className="container">
          <div className="row">
            <Company/>
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
