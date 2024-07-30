import React from "react";

function Links(props) {
  return (
    <div id="links">
      <h3>Links</h3>
      <a href="#">{props.github}</a>
      <br></br>
      <a href="#">{props.linkedin}</a>
   
      
    </div>
  );
}

export default Links;
