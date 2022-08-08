import React from "react";
import { FaCheckSquare } from "react-icons/fa";
const Summary = (props) => {
  return (
    <div>
      <p>
        {" "}
        {props.items.map((element) => (
          <div className="task card-body">
            <ul className="row justify-content-between">
              {element.text} <FaCheckSquare />{" "}
            </ul>{" "}
          </div>
        ))}
      </p>
    </div>
  );
};

export default Summary;
