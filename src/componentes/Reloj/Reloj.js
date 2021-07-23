import React, {Component} from 'react';

class Reloj extends Component {
    constructor(props){
        super(props)
        this.state = {
            hora: '12:00:00'
        }
        let idSetInt = setInterval(()=>{
            let ahora = new Date();
            let salida = ahora.getHours()+':'+ahora.getMinutes()+':'+ahora.getSeconds()
            this.setState({
                hora : salida
            })
        },1000);
    }
    render(){
        return <span>{this.state.hora}</span>
    }
}


Reloj.defaultProps = {
    lista : []
}
export default Reloj;