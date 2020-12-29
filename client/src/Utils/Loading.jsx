import React from 'react'
import {Spinner} from 'react-bootstrap';
 const Loading =() =>{
    

    return (
        <>
        <div style={{textAlign:'center',fontSize:'48px',color:'blue'}}>
         <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>  
</div> 
        </>
    )
}
export default Loading;
