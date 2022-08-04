import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        this.city = {
            cityName: 'surat'
        }
    }

    
    changecityName = () => {
        this.setcity ({
              cityName:'rajkot'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changecityName()}  > changecityName</button>
            </div>
        );
    }
}

export default City;