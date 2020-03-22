import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const handleChange = event => {
    //this what we got when write in the searchbar, we are going to send it to filterAuthor in the AuthorList
    props.filter(event.target.value);
  };

  return (
    <div className="form-group col-lg-6 col-12 mx-auto">
      <div className="input-group my-3">
        <input
          className="form-control"
          name="search"
          type="text"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
