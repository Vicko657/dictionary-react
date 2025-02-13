import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="d-flex">
      <div className="first-column col-2">
        <p>{props.meaning.partOfSpeech}</p>
      </div>
      <div className="second-column col-7">
        <p className="definition">{props.meaning.definition}</p>
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
      <div className="third-column col-3"></div>
    </div>
  );
}
