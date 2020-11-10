import React from "react";
import data from "./directory-data";
import MenuItem from "../../components/menu-item/menu-item";

const Directory = () => {
  return (
    <div className="directory-menu">
      {data.map((section, index) => {
        return <MenuItem key={index} {...section} />;
      })}
    </div>
  );
};

export default Directory;
