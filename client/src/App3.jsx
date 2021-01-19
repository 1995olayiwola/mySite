import React, { Component } from 'react';
//import logo from './friedhead.svg';
import './App3.css';
import Bank2 from './Projects/Project005/Bank2'
import { connect } from 'react-redux';

class App3 extends Component {

render() { 

  let transactionHistory = (
   <div>
    {this.props.transactionHistory.map((log) => { return <li>{log.transactionType} #{log.amount} | closing balance: #{log.newBalance} | {log.date} </li> })} 
   </div>
  )

    return (
      <div className="App">

      <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Today's transactions</h1>

      </header>

      <h1>Balance: {this.props.balance}</h1>

      <div className="atm">    
        <h2>ATM Machine</h2>
        <label>
      Make a withdraw:
        <br />
        <input
         type="number"
         className="textfield"
         onChange={e => this.setState({ number: e.target.value })}/>
      </label>
    
    <button 
        className="mainbtn"
        onClick={(amount) => this.props.withdraw(parseInt(this.state.number, 10))}>Confirm
      </button>
        
      </div>

      <Bank2 />

      <div>
        <h2>Transaction History</h2>
        {transactionHistory}
      </div>
 
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    balance: state.balance,
    transactionHistory: state.transactionHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //in last app values were hard coded, now we pass a payload depending on which button is clicked
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App3);

