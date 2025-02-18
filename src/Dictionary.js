import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [imgResults, setImgResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImgResponse(response) {
    console.log(response.data.photos);
    setImgResults(response.data.photos);
  }

  function search() {
    const apiKey = process.env.REACT_APP_DICTIONARY_ANON_KEY;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const imgapiKey = process.env.REACT_APP_DICTIONARY_IMAGE_ANON_KEY;
    const imgapiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgapiKey}`;
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
      <div className="dictionary d-flex row">
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
