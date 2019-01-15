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
    const {turno, celdas} = this.state;
    console.log("*****handleCelClick action celdaaa: ", index);
    let newCeldas = [...celdas];
    newCeldas[index] = turno.identifier;
    console.log("****newCeldas: ", newCeldas);
    this.setState({celdas: newCeldas});
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
