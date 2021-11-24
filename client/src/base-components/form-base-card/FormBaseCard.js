import React from "react";

const myStyle = {
  border: "1px solid #ccc",
  boxShadow: "5px 5px 10px #ccc",
  borderRadius: "5px",
  margin: "2rem",
  padding: "50px"
};

const FormBaseCard = ({ children }) => {

  const testColor = {
    color: "blue"
  };

  return <div style={myStyle}>{children}</div>;
};

export default FormBaseCard;
