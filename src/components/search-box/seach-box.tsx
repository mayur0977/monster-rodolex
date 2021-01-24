import "./search-box.styles.css";

import React from "react";

interface SearchBoxProps {
  placeHolder: string;
  handleChange:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined;
}
const SearchBox = (searchBoxProps: SearchBoxProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={searchBoxProps.placeHolder}
      onChange={searchBoxProps.handleChange}
    />
  );
};

export default SearchBox;
