import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [imgResults, setImgResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImgResponse(response) {
    console.log(response.data.photos);
    setImgResults(response.data.photos);
  }

  function search() {
    let apiKey = "t6a8db7630cb9o483fccd0984e54c304";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imgapiKey = "t6a8db7630cb9o483fccd0984e54c304";
    let imgapiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgapiKey}`;
    axios.get(imgapiUrl).then(handleImgResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="d-flex row">
        <form onSubmit={handleSubmit}>
          <input
            className="search-form-input"
            placeholder="Search for a word..."
            type="search"
            autoFocus={false}
            onChange={handleKeywordChange}
          />
        </form>
        <Results results={results} imgResults={imgResults} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
