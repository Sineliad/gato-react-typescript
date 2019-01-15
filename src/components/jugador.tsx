import * as React from "react";

type JugadorProps = {
    name: String,
    identifier: String,
    age?: Number
}

const Jugador = (props: JugadorProps) => {
    return <div>
        <b> Nombre: {props.name} </b>
        <p> Identificador: {props.identifier}</p>
        <p> Edad: {props.age}</p>
      </div>
}

export default Jugador;
