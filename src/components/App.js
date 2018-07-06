// Dependencies
import React, { Component } from 'react';

// Components
import Header from "./Global/Header";
import Content from "./Global/Content";
import Footer from "./Global/Footer";

// Data
import items from "../data/menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        // al header le mandamos los props, en este caso, son required  
        <Header title="Code" items={items} />
        <Content />
        <Footer copyrigth="&copy; Pablo 2018" />
      </div>
    );
  }
}

export default App;
