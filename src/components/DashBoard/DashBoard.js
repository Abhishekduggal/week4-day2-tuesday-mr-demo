import React, { Component } from "react";

import { connect } from "react-redux";

import { deposit, withdraw } from "../../ducks/reducer";

class DashBoard extends Component {
  render() {
    const { balance, deposit, withdraw } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>{balance}</h1>
        <button onClick={() => deposit(5)}>Deposit</button>
        <button onClick={() => withdraw(5)}>Withdraw</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { deposit, withdraw }
)(DashBoard);
