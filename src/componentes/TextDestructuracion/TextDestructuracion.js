import React, {Component} from 'react';

class TextDestructuracion extends Component {
    render(){
        const {
            arrayOfNumbers,
            funcion,
            objetoInfo
        } = this.props
        const mappedNumbers = arrayOfNumbers.map(funcion);   
        return <div>
            <p> funcion: {mappedNumbers.join(', ')}</p>
            <p>{objetoInfo.name + '' + objetoInfo.apellido}</p>
        </div>
    }
}

export default TextDestructuracion;