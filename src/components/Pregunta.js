import React,{Fragment,useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
const Pregunta=({setPresupuesto, setRestante,setMostrarpregunta})=> {
    //definir el state para el presupuesto
   const [cantidad, setcantidad] = useState(0);

   const [error,setError] = useState(false);

   //función para definir el presupuesto
   const definirPresupuesto = (e) => {
       setcantidad(parseInt(e.target.value,10))  //Convierte de String a Number, porque lo que viene de un input lo guarad como String
   }
   //Submit para definir presupuesto
   const agregarPresupuesto = (e) => {
       e.preventDefault();
       //Validar
       //NAN significa que no es un número, por eso la función isNam es una función que se pasa la cantidad y si no es numero tambien da error
if(cantidad < 1 || isNaN(cantidad)) 
{
setError(true);
return;  }
//Si pasa la validación 
setError(false);
setPresupuesto(cantidad);
setRestante(cantidad);
setMostrarpregunta(false);
}     
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error? <Error mensaje ="Por Favor Definir el Presupuesto"/> : null }
            <form 
            onSubmit={agregarPresupuesto}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"   
                onChange={definirPresupuesto}          
                />                
                <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"             
               
                />
                
            </form>
        </Fragment>
    );
}
Pregunta.propTypes ={
    setPresupuesto:PropTypes.func.isRequired,
    setRestante:PropTypes.func.isRequired,
    setMostrarpregunta:PropTypes.func.isRequired
}
export default Pregunta;
