import React from "react";

function Search({ onSearch, searchTerm }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onSearch} value={searchTerm} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
