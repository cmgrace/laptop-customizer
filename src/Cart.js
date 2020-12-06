import React from 'react';
import CartSummary from './CartSummary';
import CartTotal from './CartTotal';

export default function Cart (props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartSummary selected={props.selected}/>
            <CartTotal selected={props.selected}/>
            </section>
    )
}