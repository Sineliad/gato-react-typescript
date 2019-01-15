import * as React from "react";
import Celda from "./celda";

type TableroProps = {
  celdas: any[];
};

const Tablero = (props: TableroProps) => {
  return <div className="tablero">
      {props.celdas.map( (celda, i) => <Celda key={i} id={i} value={celda} /> )}
  </div>;
};

export default Tablero;
