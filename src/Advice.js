import React from "react";

const Advice = ({ advices }) => {
  return (
    <>
      <h1>ADVICE #{advices.id}</h1>
      <div className="advice">{advices.advice}</div>
    </>
  );
};
export default Advice;