import React, { Component } from 'react';

class Savings extends Component {
  render() {
    return (
      <div className="account">
        <h2>SAVINGS</h2>
        <div className="balance">${this.props.savBal}</div>

        <input  type="text"
                onChange={this.props.handler}
                placeholder="enter an amount" />

        <input  type="button"
                value="Deposit"
                onClick={this.props.savDeposit} />

        <input  type="button"
                value="Withdraw"
                onClick={this.props.savWithdraw} />
      </div>
    );
  }
}


export default Savings;
