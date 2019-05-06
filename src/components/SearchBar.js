import React from "react";
import { Icon, IconButton, InputBase, Paper } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const SearchBar = props => (
  <Paper elevation={1}>
    <InputBase
      placeholder="Enter any organization name"
      onChange={props.handleOnChange}
      fullWidth
    />
    <IconButton aria-label="Search" onClick={props.handleOnClick}>
      <Icon>
        <Search />
      </Icon>
    </IconButton>
  </Paper>
);
export default SearchBar;
