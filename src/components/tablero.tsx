import React, { Component } from "react";
import Celda from "./celda";

class Tablero extends Component {
  public state = {
    celdas: [0, 1, 2, 3, 4, 5, 6, 7, 8] //9 celdas
  };

  renderCeldas = () => {
    const { celdas } = this.state;
    return celdas.map((celda, i) => (
      <div key={i}>
        <Celda value={celda} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        Soy el componente tablero
        {this.renderCeldas()}
      </div>
    );
  }
}

export default Tablero;
