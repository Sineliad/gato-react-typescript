import * as React from "react";

type CeldaProps = {
  id: Number;
  value?: Object;
  handleCelClick: any;
};

const Celda = (props: CeldaProps) => {
  return <div className="celda" onClick={props.handleCelClick} />;
};

export default Celda;

//{props.id}
