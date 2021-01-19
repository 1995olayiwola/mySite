import React from 'react';
import Parse from 'parse'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
 const user = Parse.User.current();
   const config = {
         
    public_key: 'FLWPUBK-0d4e141809a7a2e0cf4085f54b4355fa-X',
    tx_ref: Date.now(),
    amount: 2000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: '',
      phonenumber:'' ,
      name: '',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
     <h1>Hello Test user</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}