import * as React from "react";

type CeldaProps = {
    value: Number
}

const Celda = (props: CeldaProps) => {
  return <div className="celda"> {props.value} </div>;
};

export default Celda;
