import React, { Component } from 'react';
import Cart from './components/Cart/Cart'
import {connect} from 'react-redux'
import {showLists} from './actions'
class App extends Component {
  
  componentDidMount() {
    const {showLists}=this.props
     showLists()
  }
  
  render() {
    return (
      <div>
        <Cart/>
      </div>
    );
  }
}




export default connect(null,{showLists})(App);