import React, {Component} from 'react';

class Text extends Component {
    render(){
        const textoSegunBool = this.props.boolean ? 'Verdadero' : 'Falso';
        const mostrarDetalle = this.props.showDetalle ? 'Si' : 'No';
        const mappedNumbers = this.props.arrayOfNumbers.map(n=> n*2);   
        return <div>
            <p>{this.props.text}</p>
            <p>{this.props.number}</p>
            <p>{JSON.stringify(this.props.boolean)}</p>
            <p>{textoSegunBool}</p>
            <p>{this.props.arrayOfNumbers}</p>
            <p>{this.props.arrayOfNumbers.join(', ')}</p>
            <p> duplicados: {mappedNumbers.join(', ')}</p>
            <p>{this.props.objetoInfo.name}</p>
        </div>
    }
}

export default Text;