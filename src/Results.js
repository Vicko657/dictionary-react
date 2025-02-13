import React from "react";
import Meaning from "./Meaning";
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

        {props.results.meanings.map(function (meaning, index) {
          if (index < 3) {
            return (
              <div className="row" key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
