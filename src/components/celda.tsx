import * as React from "react";

type CeldaProps = {
    id: Number,
    value?: String
}

const Celda = (props: CeldaProps) => {
  return <div className="celda"> {props.id} {props.value} </div>;
};

export default Celda;
