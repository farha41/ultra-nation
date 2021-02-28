import React from 'react';
import Country from '../Country';

const Cart = (props) => {
    const cart = props.cart
    const totalPopulation=cart.reduce((sum,country) =>sum + country.population ,0)
    return (
        <div>
           <h2>this is cart:{cart.length}</h2> 
           <h3>total population:{totalPopulation}</h3>
        </div>
    );
};

export default Cart;
