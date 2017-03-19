import React, { Component } from 'react';

class Checking extends Component {
  render() {
    return (
      <div className="account">
        <h2>CHECKING</h2>
        <div className="balance">${this.props.chkBal}</div>

        <input  type="text"
                onChange={this.props.handler}
                placeholder="enter an amount" />

        <input  type="button"
                value="Deposit"
                onClick={this.props.chkDeposit} />

        <input  type="button"
                value="Withdraw"
                onClick={this.props.chkWithdraw} />
      </div>
    );
  }
}


export default Checking;
