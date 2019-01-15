import * as React from "react";

type CeldaProps = {
    id: Number,
    value?: Object,
    handleCelClick: any
}

const Celda = (props: CeldaProps) => {
    console.log("props celdaaaaaaaaaaaaaaaaaaaaaaaaa: ", props)
  return <div className="celda" onClick={props.handleCelClick}> {props.id}  </div>;
};

export default Celda;
