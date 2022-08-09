import React, { Component } from 'react'

export default class Time extends Component {
 
    constructor(props) {
        super(props);


        this.state = {
            Time: new Date()
        }
    }

    tick = () => {
        this.setState({
            Time: new Date()
        })
    }



    componentDidMount = () => {
        this.Time = setInterval(() => this.tick(), 1000)
    }


    componentDidUpdate = (Newprops, prevstate) => {
        if (prevstate.Time !== this.state.Time) {
            console.log("componentDidUpdate");
        }
    }


    componentWillUnmount = () => {
        clearInterval(this.Time);
    }


    render() {
        return (
            <div>
                <p>{this.state.Time.toLocaleTimeString()}</p>
            </div>
        )
    }
}

