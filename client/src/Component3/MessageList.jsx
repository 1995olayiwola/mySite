import React from 'react';
const Dummy_Data =[

    {
        senderId:'olayiwola',
        text: 'hello'
    },
    {
       senderId:'akanji',
        text: 'how are you' 
    },
     {
       senderId:'olayiwola',
        text: 'fine' 
    },
]
const MessageList = ()=>{
    return (
        <div className="message-list">

      {Dummy_Data && Dummy_Data.map((message,index)=>{
          return <div key={index} className="message">
             <div className="message-sender">{message.senderId}</div> 
        <div className="message-text">{message.text}</div>
          </div>
      })}
        </div>
    )
}
export default MessageList;