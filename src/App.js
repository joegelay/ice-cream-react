import React from 'react';
import './App.css';
import IceCreamContainer from './IceCreamContainer'
import IceCreamChoice from './IceCreamChoice'

export default class App extends React.Component {

  state = {
    iceCreamFlavor: "Choose an ice cream above!"
  }

  setIceCreamFlavor = (newFlavor) => {
    this.setState({
      iceCreamFlavor: newFlavor
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ice Cream Shop</h1>
        <h2>Select an ice cream flavor:</h2>
        <IceCreamContainer setIceCreamFlavor={this.setIceCreamFlavor}/>
        <h2>Your Ice Cream...</h2>
        <IceCreamChoice iceCreamFlavor={this.state.iceCreamFlavor} />
      </div>
    );
  }
}


