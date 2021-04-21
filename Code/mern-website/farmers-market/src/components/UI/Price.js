import React from "react";
import { MdEuroSymbol } from 'react-icons/md';

/**
 * @author
 * @function Price
 **/

const Price = (props) => {
  return (
    <div
      style={{
        fontSize: props.fontSize ? props.fontSize : "14px",
        fontWeight: "bold",
        margin: "5px 0",
      }}
    >
      <MdEuroSymbol  />
      {props.value}
    </div>
  );
};

export default Price;