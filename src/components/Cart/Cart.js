import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import PrivateCart from '../PrivateCart/PrivateCart';
import {connect  } from 'react-redux';
import '../cart.scss'
class Cart extends Component {
    render() {
        const {goodlists,carts}=this.props
        console.log(goodlists,carts);
        
        return (
            <div className="shopping">
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