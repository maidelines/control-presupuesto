import React, {useState}from 'react';
import Error from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types';

const Formulario = ({setGasto,setCrearGasto}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);    
    
    //Cuando el usuario agrega un gasto
    const agregarGastos = (e) => {
        e.preventDefault();
        //validar
if(cantidad < 1 || isNaN(cantidad) || nombre.trim()===''){
setError(true);
return;
}

     //construir gasto
     setError(false);
       const gasto ={
           nombre,
           cantidad,
           id:shortid.generate()
       }      
        //pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);
        //resetear el form
        setNombre('');
        setCantidad(0);

    }
    
 return(
        <form
        onSubmit={agregarGastos}
        >            
            <h2>Agrega tus datos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}
            <div className="campo">
                <label>Nombre del Gasto </label>
                <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={nombre}
                onChange={e=>setNombre(e.target.value)}
                />               
                
            </div>
            <div className="campo">
                <label>Cantidad del Gasto </label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
                value ={cantidad}
                onChange={e=>setCantidad(e.target.value)}
                />               
            </div>
            <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
            />
        </form>
    );

}
Formulario.propTypes ={
    setGasto:PropTypes.func.isRequired,
    setCrearGasto:PropTypes.func.isRequired
}
 
export default Formulario;