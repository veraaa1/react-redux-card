import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import PrivateCart from '../PrivateCart/PrivateCart';
import {connect  } from 'react-redux';
class Cart extends Component {
    render() {
        const {goodlists,carts}=this.props
        console.log(goodlists,carts);
        
        return (
            <div>
               <ProductList goodlists={goodlists} carts={carts} />
               <PrivateCart carts={carts} goodlists={goodlists}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return({
    goodlists:state.products,
    carts:state.cart
})}

export default connect(mapStateToProps)(Cart);