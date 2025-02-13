import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    console.log(props.meaning);
    return (
      <div className=" col-9">
        {props.meaning.meanings.map(function (meaning, index) {
          if (index < 3) {
            return (
              <div className="d-flex col-12">
                <div className="first-column col-3">
                  <p>{meaning.partOfSpeech}</p>
                </div>
                <div className="second-column col-9">
                  <p className="definition">{meaning.definition}</p>
                  <Example example={meaning.example} />
                  <Synonyms synonyms={meaning.synonyms} />
                </div>
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
