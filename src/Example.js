import React from "react";

export default function Example(props) {
  if (props.example) {
    return <p className="example">Example: {props.example}</p>;
  } else {
    return null;
  }
}
