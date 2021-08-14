import { DonutLarge } from "@material-ui/icons";
import React, { Component, useState } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { DataContext } from "../context";

export class Payment extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }
  constructor(props) {
    super(props);
    this.state = {
      env: "sandbox",
      currency: "USD",
      amount: 15,
      client: {
        sandbox:
          "Ad6UvZdfekt2TC1YZjyHiYBr2ClIHpi8Yht28qTWwA1ZCTjKYSq20Fo5knYWkykDIcVEkurp4NIiV3gQ",
        production: "YOUR-PRODUCTION-APP-ID",
      },
    };
  }
  getamount(ev) {
    this.setState({ amount: ev.target.value });
  }

  jeetfun(err) {
    console.log(err);
  }
  parthafun(suc) {
    console.log(suc);
  }
  prakashfun(canc) {
    console.log(canc);
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>;
    }
    return (
      <div>
        <p>
          <input
           
            type="text"
            value={total}
            onChange={this.getamount.bind(this)}
          />

          <PaypalExpressBtn
            env={this.state.env}
            client={this.state.client}
            currency={this.state.currency}
            total={this.state.amount}
            onError={this.jeetfun}
            onSuccess={this.parthafun}
            onCancel={this.prakashfun}
            style={{
                size:'large',
                color:'blue',
                shape:'rect',
                label:'checkout'
            }}
          />
          
        </p>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Payment;