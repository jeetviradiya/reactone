import React, { Component } from 'react';
import City from './City';

class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: 'india'
        }
    }


    changestateName = () => {
        this.setState({
            cityName: 'canada'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changestateName()}  > changestateName</button>
                <City name={this.state.cityName} />
            </div>
        );
    }
}

export default State;