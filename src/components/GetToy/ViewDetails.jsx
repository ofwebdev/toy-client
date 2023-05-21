import React from "react";
import { useParams } from "react-router-dom";

function ViewDetails() {
  const { id } = useParams();
  return (
    <>
      <h2>Toy Details</h2>
      <p>Toy ID: {id}</p>
      {/* Render the rest of the toy details */}
    </>
  );
}

export default ViewDetails;
