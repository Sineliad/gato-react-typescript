import React, { Component } from "react";
import Celda from "./celda";

class Tablero extends Component {
  public state = {
    celdas: [0, 1, 2, 3, 4, 5, 6, 7, 8] //9 celdas
  };

  renderCeldas = () => {
    const { celdas } = this.state;
    return celdas.map((celda, i) => <Celda key={i} id={celda} />);
  };

  render() {
    return <div className="tablero">{this.renderCeldas()}</div>;
  }
}

export default Tablero;
