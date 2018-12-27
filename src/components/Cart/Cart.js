import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import PrivateCart from '../PrivateCart/PrivateCart';
import {connect  } from 'react-redux';
class Cart extends Component {
    render() {
        const {goodlists}=this.props
        return (
            <div>
               <ProductList goodlists={goodlists}/>
               <PrivateCart/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return({
    goodlists:state.products
})}

export default connect(mapStateToProps)(Cart);