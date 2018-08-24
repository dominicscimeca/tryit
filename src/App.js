import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Products from './Products'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Products/>
      </div>
    );
  }
}

export default App;
