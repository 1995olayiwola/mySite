import React from 'react';
import {Alert} from 'react-bootstrap';

function MyAlert(Props) {
    return (
        <div>
            <Alert variant={Props.variant}>
    {Props.message}
  </Alert>
        </div>
    )
}
MyAlert.defaultProps = {
    variant:"warning"
}

export default MyAlert;
