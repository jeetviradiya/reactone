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
        </div>
    );
}

export default Cityf;