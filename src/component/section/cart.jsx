import React, { Component } from 'react';
import { DataContext } from '../context';
import { Link } from 'react-router-dom';
import Colors from './colors';
import '../css/details.css';
import '../css/cart.css';


export class Cart extends Component {

    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const { cart, increase, reduction, removeProduct, total} = this.context;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center" }}>Nothing Product</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors} />
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}>-</button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}>+</button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                    <h3>Total: {total}</h3>
                        <Link to="/payment">Payment</Link>
                    </div>
                </>
            );
        }
    }
}
export default Cart;