import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Avatar from "@mui/material/Avatar";
import { deepOrange, green } from "@mui/material/colors";
import PersonIcon from '@mui/icons-material/Person';
import { clrs } from "../../DataSet";

export default function IconSet() {
  return (
    <div style={{ display: "flex" }}>
      <DashboardIcon
        style={{
          color: clrs[2],
          fontSize: "35px",
          opacity: "0.8",
        }}
      />
      <ControlPointIcon
        style={{
          color: clrs[2],
          fontSize: "35px",
          opacity: "0.8",
          paddingLeft: "5px",
        }}
      />
      <Avatar sx={{ bgcolor: deepOrange[500],marginTop:"-3px",marginLeft:"10px" }}>
        <PersonIcon />
      </Avatar>
    </div>
  );
}
