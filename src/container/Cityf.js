import React, { useState } from 'react';

function Cityf(props) {

    const [CityName, setCityName] = useState('surat');

    const changecity = () => {
        setCityName('amdabad')
    }

   
    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => changecity()}>
                changecity
            </button>
            {
        props.Country_name === 'India' ? <p>Taj Mahel</p> : <p>London Eye</p>
    }
        </div >
        
    );
}

export default Cityf;