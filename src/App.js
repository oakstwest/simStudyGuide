import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import starWars from './server/starWars';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Product: [],
      updateProduct: '',
      deleteProduct: '',
      createProduct: '',
// this is where you set state.
    }
    

    }
  }



  render() {
    return (
      <div className='App'>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <button>Cancel</button>
        <button>Add to Inventory</button>
        <div>
          <Dashboard />
          <Form />
          <Header />
          <starWars/>
        </div>
      </div>
      // rendering the components in app.js
    );
  }
}

export default App;
