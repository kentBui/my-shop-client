import React, { useState } from "react";

const SearchWidget = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // dispatch action to search
  };
  return (
    <aside className="single_sidebar_widget search_widget">
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Posts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </form>
      <div className="br"></div>
    </aside>
  );
};

export default SearchWidget;
