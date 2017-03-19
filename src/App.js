import React, { Component } from 'react';
import logo from './ga.png';
import Checking from './Checking.js';
import Savings from './Savings.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hitMe : 0,
      chkBal : 0,
      savBal : 0
    }
}

  handler(e){
    this.setState({ hitMe : e.target.value });
    console.log(this.state.hitMe);
  }

  chkDeposit(e){
    this.setState({chkBal : parseInt(this.state.chkBal) + parseInt(this.state.hitMe)})
  }

  chkWithdraw(e){
    if(parseInt(this.state.chkBal) - parseInt(this.state.hitMe) < 0){
      alert("INSUFFIENT BALANCE!")
    } else{
      this.setState({chkBal : parseInt(this.state.chkBal) - parseInt(this.state.hitMe)})
    }
  }

  savDeposit(e){
    this.setState({savBal : parseInt(this.state.savBal) + parseInt(this.state.hitMe)})
  }

  savWithdraw(e){
    if(parseInt(this.state.savBal) - parseInt(this.state.hitMe) < 0){
      alert("INSUFFIENT BALANCE!")
    } else{
      this.setState({savBal : parseInt(this.state.savBal) - parseInt(this.state.hitMe)})
    }
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>

        <Checking
          chkBal={this.state.chkBal}
          hitMe={this.state.hitMe}
          handler={event => this.handler(event)}
          chkDeposit={event => this.chkDeposit(event)}
          chkWithdraw={event => this.chkWithdraw(event)}
        />
        <Savings
          savBal={this.state.savBal}
          hitMe={this.state.hitMe}
          handler={event => this.handler(event)}
          savDeposit={event => this.savDeposit(event)}
          savWithdraw={event => this.savWithdraw(event)}
        />

        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
