import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="d-flex">
      <div className="col-2">
        <p>{props.meaning.partOfSpeech}</p>
      </div>
      <div className="col-7">
        <h3>{props.meaning.definition}</h3>
        <em>{props.meaning.example}</em>
      </div>
      <div className="col-3"></div>
    </div>
  );
}
