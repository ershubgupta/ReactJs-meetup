import React from "react";
import Spinner from "react-bootstrap/Spinner";

const loader = {
  position: "fixed",
  zIndex: "99",
  top: "50%",
  left: "50%",
};

export default function Loader() {
  return <Spinner animation="border" variant="primary" style={loader} />;
}
