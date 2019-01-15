import React, { Component } from "react";
import Tablero from "./tablero";
import Jugador from "./jugador";

type Jugador = {
  name: String;
  identifier: String;
  age?: Number;
};

interface IGame {
  celdas: any[];
  jugadores: Jugador[];
  turno: Jugador;
}

class Game extends Component<{}, IGame> {
  public state = {
    celdas: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    jugadores: [
      { name: "Dailenis", identifier: "X", age: 30 },
      { name: "Matias", identifier: "O" }
    ],
    turno: { name: "Dailenis", identifier: "X", age: 30 }
  };

  public handleCelClick = (celda: any) => () => {
    console.log("*****handleCelClick action celdaaa: ", celda);
  };

  render() {
    const { celdas, jugadores, turno } = this.state;
    return (
      <div>
        <b> Turno de: {turno.name} </b>{" "}
        <Tablero celdas={celdas} handleCelClick={this.handleCelClick} />
        {jugadores.map((jugador, i) => (
          <Jugador
            key={i}
            name={jugador.name}
            identifier={jugador.identifier}
            age={jugador.age}
          />
        ))}
      </div>
    );
  }
}

export default Game;
