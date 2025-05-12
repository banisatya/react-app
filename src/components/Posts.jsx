import React, { Component } from "react";
import queryString from "query-string";

function Posts(match, location) {
  const { sortBy } = queryString.parse(location.search);

  return <h2>This is Posts page, passed value {sortBy}</h2>;
}

export default Posts;
