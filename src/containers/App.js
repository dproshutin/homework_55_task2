import React, {Component} from 'react';
import './App.css';
import AddCost from '../components/AddCost/AddCost.js';
const uuid = require('uuid/v1');

class App extends Component {
  state = {
    costs: [],
    currentCost: {}
  };

  typeItem = (event) => {
    const currentCost = {...this.state.currentCost};
    currentCost.item = event.target.value;
    this.setState({currentCost});
  };
  typePrice = (event) => {
    const re = /^[0-9\b]+$/;

    if (event.target.value === '' || re.test(event.target.value)) {
      const currentCost = {...this.state.currentCost};
      currentCost.cost = event.target.value;
      this.setState({currentCost});
    }
  };
  addCost = (event) => {
    event.preventDefault();
    const costs = [...this.state.costs];
    let currentCost = {item: this.state.currentCost.item, cost: this.state.currentCost.cost, id: uuid()};
    costs.push(currentCost);

    currentCost = {item: '', cost: ''};
    this.setState({costs, currentCost});

    // console.log(currentCost);

  };
  render() {
    console.log(this.state.costs);
    console.log(this.state.currentCost);
    return (
        <div className="App">
          <AddCost
              changeItem={(e) => this.typeItem(e)}
              changePrice={(e) => this.typePrice(e)}
              click={(e) => this.addCost(e)}
              item={this.state.currentCost.item}
              cost={this.state.currentCost.cost}
          />
        </div>
    );
  }
}

export default App;
