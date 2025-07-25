import React from "react";
import { SearchIcon } from "../icons";

const Search = () => {
  return (
    <div className="bg-post flex items-center gap-5 rounded-full px-5 py-3">
      <div>
        <SearchIcon />
      </div>
      <input className="outline-none" placeholder="Search..." type="text" />
    </div>
  );
};

export default Search;
