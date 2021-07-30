import React from "react";
import SideBarCategory from "./SideBarCategory";
import SideBarFilter from "./SideBarFilter";

const SideBar = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-5">
      <SideBarCategory />
      <SideBarFilter />
    </div>
  );
};

export default SideBar;
