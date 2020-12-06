import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';
import CustomizeForm from './CustomizeForm';
import FEATURES from './FEATURES'
import Header from './Header'
import Cart from './Cart'

// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
  state = {
    lists: FEATURES,

    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[feature] = newValue;
    this.setState({
      lists: FEATURES,
      selected: newSelected
    });
  };

  render() {
    const {lists, selected} = this.state

    return (
      <div className="App">
        <Header />
        <main>
          <CustomizeForm 
            featureList={lists}
            selected={selected}
            onItemChange={this.updateFeature}
          />
          <Cart 
            selected={selected}
          />
        </main>
      </div>
    );
  }
}

export default App;