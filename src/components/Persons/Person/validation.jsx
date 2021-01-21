import React from 'react'

const Validation = (props) => {
    let validMessage = 'Text long enough';
    if (props.strLegnth <= 5) {
        validMessage = 'Text long Too short';
    }
    return ( 
        <div>
            <p>V M: {validMessage} </p>
        </div>
    );
}
 
export default Validation;