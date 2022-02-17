import React from "react";
import { Link } from "react-router-dom";

function ProductComponent(props) {
  return (
    <div className="div-productcomponent">
      <Link to={`/${props.id}-detailpage`}>
        <div>
          <img src={props.image} alt="" />
          <h5>Name : {props.title}</h5>
          <h5>price : {props.price}</h5>
        </div>
      </Link>
    </div>
  );
}

export default ProductComponent;
