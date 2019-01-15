import * as React from "react";

type CeldaProps = {
    id: Number,
    value?: Object
}

const Celda = (props: CeldaProps) => {
  return <div className="celda"> {props.id} </div>;
};

export default Celda;
