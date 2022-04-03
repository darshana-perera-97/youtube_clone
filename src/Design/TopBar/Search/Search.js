import React from "react";
import SearchField from "react-search-field";
import { clrs } from "../../DataSet";
import FreeSolo from "./FreeSolo";

export default function Search() {
  return (
    <div style={{ backgroundColor: clrs[1]}}>
      <FreeSolo />
    </div>
  );
}
