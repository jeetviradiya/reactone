import React, { useState } from 'react';

function Statef(props) {

    const [stateName, setStateName] = useState('india');

    const chengestate = () => {
        setStateName('uk')
    }

    return (
        <div>
            <p>{stateName}</p>
            <button onClick={() => chengestate()}>
                chengestate
            </button>
            
            {/* <city Country_name ={CountryName} /> */}
        </div>
    );
}

export default Statef;