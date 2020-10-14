import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div>
            <div className = "areaEmail">
    <p>Email: {props.Email} </p>
            </div>

         <div className = "areaEndereco">
    <p>Endereço: {props.Endereco} </p>

            </div>
        </div>
    )
}
export default CardPequeno;