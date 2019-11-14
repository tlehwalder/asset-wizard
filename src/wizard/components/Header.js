import React from "react";
import { Icon } from "@material-ui/core";

export default ({ onClose }) => (
  <div
    style={{
      backgroundColor: "lightgrey",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2vh"
    }}
  >
    <h1>Create asset</h1>
    <div style={{ cursor: "pointer" }}>
      <Icon onClick={onClose}>close</Icon>
    </div>
  </div>
);
