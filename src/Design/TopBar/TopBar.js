import React from "react";
import { clrs } from "../DataSet";
import Icon from "./Icon/Icon";
import IconSet from "./iconSet/IconSet";
import Search from "./Search/Search";

export default function TopBar() {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: clrs[0],
        paddingTop: "18px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Icon />
      <Search />
      <IconSet />
    </div>
  );
}
