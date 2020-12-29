import React from 'react'

const PayPal = () => {
   
    
    const PayPal = React.useRef();
    React.useEffect(()=>{
window.PayPal.Buttons({
    createOrder: (data,actions,err)=>{
return actions.order.create({
    intent:"capture",
    purchase_units:[
        "subscribe",
        {
            currency_code:"CAD",
            value:10.00
        }
    ]
})
    }
    ,
onApprove: async(data, actions)=>{
    const order = await actions.order.capture();
    console.log(order);
},
onError:(err)=>{
    console.log(err)
}
}).render(PayPal.current)
    },[])
    return (
        <div>
         <div ref={PayPal}></div>   
        </div>
    )
}

export default PayPal;
