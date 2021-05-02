import React from "react";

import "./SearchBox.scss"

const SearchBox = props => (
    <input
        className={'search-box'}
        type={'search'}
        placeholder={'search car by make'}
        onChange={props.onSearchChange}
    />
)

export default SearchBox;