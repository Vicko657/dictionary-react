import React from "react";
import Meaning from "./Meaning";
import Images from "./Images";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results d-flex row">
        <div className="word d-flex">
          <h1 className="text-capitalize">{props.results.word}</h1>
          <h2 className="">/{props.results.phonetic}/</h2>
        </div>
        <div className="row">
          <Meaning meaning={props.results} />
          <Images photos={props.imgResults} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
