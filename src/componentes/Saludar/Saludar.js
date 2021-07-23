import React, {Component} from 'react';

class Saludar extends Component {
    render() {
        return <h2> {this.props.saludo} </h2>
    }
}

export default Saludar