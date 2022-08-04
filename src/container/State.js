import React, { Component } from 'react';

class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateName: 'india'
        }
    }


    changestateName = () => {
        this.setState ({
              stateName:'canada'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changestateName()}  > changestateName</button>
            </div>
        );
    }
}

export default State;