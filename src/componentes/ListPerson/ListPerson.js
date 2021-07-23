import React, {Component} from 'react';
import EsMayor from '../EsMayor/EsMayor';

class ListPerson extends Component {
    render(){
        const listap = this.props.lista;
        return listap.map(
            (ele,ind) => <li key={ind}>{ele.Lastname}, {ele.name}: <EsMayor edad={ele.edad}/> </li>
        )
    }
}

ListPerson.defaultProps = {
    lista : []
}
export default ListPerson;