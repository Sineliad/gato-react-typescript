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
    celdas: ["", "", "", "", "", "", "", "", ""],
    jugadores: [
      { name: "Dailenis", identifier: "X", age: 30 },
      { name: "Matias", identifier: "O" }
    ],
    turno: { name: "Dailenis", identifier: "X", age: 30 }
  };

  public handleCelClick = (index: any) => () => {
    const { turno, celdas, jugadores } = this.state;
    console.log("*****handleCelClick action celdaaa: ", index);
    let newCeldas = [...celdas];

    //actualizar tablero
    newCeldas[index] = turno.identifier;
    console.log("****newCeldas: ", newCeldas);
    //actulizar turno
    let next_player = jugadores[0];
    if (turno.identifier == "X") {
      // X JUGADOR[0]
      next_player = jugadores[1];
    }
    if (turno.identifier == "O") {
      //O JUGADOR[1]
      next_player = jugadores[0];
    }
    this.setState({ celdas: newCeldas, turno: next_player });
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
