import React from 'react';
import Parse from 'parse';
import './Payhook.css';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
  var user = Parse.User.current();
  const config = {
    public_key: 'FLWPUBK-0d4e141809a7a2e0cf4085f54b4355fa-X',
    tx_ref: Date.now(),
    amount: 2,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'olayiwolarahmon84@gmail.com',
      phonenumber: '08055049241',
      name: 'olayiwola abdur rahmon',
    },
    customizations: {
      title: 'Monthly subscription payment',
      description: 'Payment for monthly due',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="app">
     <h1>Hello , {user && user.get('email')}</h1>

      <button style={{backgroundColor:'blue'}}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with askmeaboutpos.com.ng
      </button>
    </div>
  );
}