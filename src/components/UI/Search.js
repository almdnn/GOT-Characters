import React from "react";

const Search = (props) => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search characters"
          onChange={props.handleChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
