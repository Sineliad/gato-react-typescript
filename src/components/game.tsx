import React, { Component } from "react";
import Tablero from "./tablero";
import Jugador from "./jugador";

type Jugador = {
  name: String;
  identifier: String;
  age?: Number;
};

interface IGame {
  celdas: String[];
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

  public switchPlayerTurn = () => {
    const { turno, jugadores } = this.state;
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
    this.setState({ turno: next_player });
  };

  public validateGameWin = (newCeldas: String[]) => {
    //Validar Horizontales: 0,1,2 - 3,4,5 - 6-7-8
    if (
      newCeldas[0] === newCeldas[1] &&
      newCeldas[1] === newCeldas[2] &&
      newCeldas[2] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
    if (
      newCeldas[3] === newCeldas[4] &&
      newCeldas[4] === newCeldas[5] &&
      newCeldas[5] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
    if (
      newCeldas[6] === newCeldas[7] &&
      newCeldas[7] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
    //Validar Verticales: 0,3,6 - 1,4,7  -  2,5,8
    if (
      newCeldas[0] === newCeldas[3] &&
      newCeldas[3] === newCeldas[6] &&
      newCeldas[6] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
    if (
      newCeldas[1] === newCeldas[4] &&
      newCeldas[4] === newCeldas[7] &&
      newCeldas[7] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
    if (
      newCeldas[2] === newCeldas[5] &&
      newCeldas[5] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
    //Validar Diagonales 0,4,8  -   2,4,6
    if (
      newCeldas[0] === newCeldas[4] &&
      newCeldas[4] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
    if (
      newCeldas[2] === newCeldas[4] &&
      newCeldas[4] === newCeldas[6] &&
      newCeldas[6] !== ""
    ) {
      console.log("JUEGO GANADO");
      return 1;
    }
  };

  public handleCelClick = (index: any) => () => {
    const { turno, celdas } = this.state;
    console.log("*****handleCelClick action celdaaa: ", index);
    let newCeldas = [...celdas];
    //actualizar tablero
    newCeldas[index] = turno.identifier;
    console.log("****newCeldas: ", newCeldas);
    this.setState({ celdas: newCeldas });

    this.validateGameWin(newCeldas);
    this.switchPlayerTurn();
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
