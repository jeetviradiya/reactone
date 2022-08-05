import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default City;