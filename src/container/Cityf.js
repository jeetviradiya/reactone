import React, { useState } from 'react';

function Cityf(props) {

    const [CityName, setCityName] = useState('surat');

    const chengecity = () => {
        setCityName('amdabad')
    }

   
    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => chengecity()}>
                chengecity
            </button>
            {
        props.Country_name === 'India' ? <p>Taj Mahel</p> : <p>London Eye</p>
    }
        </div >
        
    );
}

export default Cityf;