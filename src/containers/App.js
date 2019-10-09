import React, {Component} from 'react';
import './App.css';
import AddCost from '../components/AddCost/AddCost.js';

class App extends Component {
  state = {
    costs: [],
    currentCost: {}
  };

  typePrice = (event) => {
    const re = /^[0-9\b]+$/;

    if (event.target.value === '' || re.test(event.target.value)) {
      const currentCost = {...this.state.currentCost};
      currentCost.cost = event.target.value;
      this.setState({currentCost});
    }
  };
  render() {
    return (
        <div className="App">
          <AddCost
              change={(e) => this.typePrice(e)}
              // click={}
              item={this.state.currentCost.item}
              cost={this.state.currentCost.cost}
          >
          </AddCost>
        </div>
    );
  }
}

export default App;
