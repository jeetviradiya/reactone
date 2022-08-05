import React, { useState } from 'react';
function Fees(props) {
    const [Fees, setFees] = Usestate('45000');

    const ChangeFees = () => {
        SetFees('50000')
    }
}
return (
    <div>
        {
            props.Fees === 'REACT' ? <p>45000</p> : <p>50000</p>
        }
        <p>{Fees}</p>
        <button onClick={() => ChangeFees()}>Fees</button>
    </div>
)

export default Fees

