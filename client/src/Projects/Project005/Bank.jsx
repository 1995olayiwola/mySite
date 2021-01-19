import React from 'react';
import {Card,Button} from 'react-bootstrap'

const Bank = () => {
  function reducer(state,action){
    switch(action.type){
      case"DEPOSIT":
      return{
        ...state,
        total:state.total + action.payload,
        depositAmount: action.payload,
        isDeposit:true,
      isWithdraw:false
      };
      case"WITHDRAW":
      return{
        ...state,
        total:state.total - action.payload,
        withdrawAmount: action.payload,
        isDeposit:false,
      isWithdraw:true
      };
      default:
      return state;
    }
  
    

  }
    const initialState={
      depositAmount:0,
      withdrawAmount:0,
      total:100,
      isDeposit:false,
      isWithdraw:false
    };
    function transactionMessage(money,type){
      const prevBalance = type ==='deposit'?state.total-money:state.total+money;
      return <div>
        <p>You just {type} <b>{type ==='withdraw'?'-': ''}</b> #{money}NG on your wallet</p>
        <p>Your balance was <p>#{prevBalance}NG</p> </p>
        <p>Now your balance is <p>#{state.total}NG</p></p>
      </div>

    }
    
    
  const[state,dispatch] = React.useReducer(reducer,initialState);
  console.log('State is:', state);
  const rndomVal = Math.floor(Math.random()*20)+1;
  const depositAction={type:'DEPOSIT',payload:rndomVal};
  const WithdrawAction={type:'WITHDRAW',payload:rndomVal}
    return (
        <div className="container">
            <Card>
  <Card.Header as="h5">Ask me about POS</Card.Header>
  <Card.Body>
 
    <Button onClick={()=>dispatch(depositAction)} variant="primary">Deposit</Button>{' '}
    <Button onClick={()=>dispatch(WithdrawAction)}variant="danger">Withdraw</Button>{' '}
       {state.isWithdraw?transactionMessage(state.withdrawAmount,'withdraw'):null}
{state.isDeposit?transactionMessage(state.depositAmount,'deposit'):null}
    {!state.isDeposit && !state.isWithdraw?<p>Your total balance is <p>#{state.total} NG</p> </p>:null}
    
  </Card.Body>
</Card>
        </div>
    )
}

export default Bank
