import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1> 404 Not found </h1>
      <p>
        <Link to="/"><h2>Back to Home</h2></Link></p>
    </div>
  );
}

export default ErrorPage;
