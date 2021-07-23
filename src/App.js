import logo from './logo.svg';
import './App.css';
import Hello from './componentes/Hello/Hello'
import Arrow from './componentes/Arrow/Arrow'
import Saludar from'./componentes/Saludar/Saludar'
import ListPerson from './componentes/ListPerson/ListPerson'
import EsMayor from './componentes/EsMayor/EsMayor'
import Reloj from './componentes/Reloj/Reloj'
import Toast from './componentes/toast/Toast'
import Text from './componentes/Text/Text'
import TextDestructuracion from './componentes/TextDestructuracion/TextDestructuracion';
function App() {
  const listaper = [
    {
      name : 'Juan',
      Lastname : 'Molina',
      edad : 17
    },
    {
      name : 'Pedro',
      Lastname : 'Gomez',
      edad : 45
    }
  ];
  return (
    <>
      <Arrow title = "Este es un saludo con arrow funtion"/>
      <Hello />
      <Saludar saludo = "Este otro saludo es con una clase"/>
      <ListPerson lista={listaper} />
      <EsMayor edad={45} />
      <Reloj />
      <Text
        arrayOfNumbers = {[2,4,6,8]} 
        number={9} 
        text='Seguimos aprendiendo mas de react' 
        boolean={true} 
        showDetalle
        objetoInfo = {{name: 'Juan', apellido: 'Perez'}}/>
      <Toast msg = "Este es un toast" />
      <TextDestructuracion
      arrayOfNumbers = {[2,4,6,8]}
      objetoInfo = {{name:'Juan', apellido:'Perez' }}
      funcion = {p => p*p}
      text = 'Aprendemos mucho mas de react'/>
    </>
  );
}

export default App;
