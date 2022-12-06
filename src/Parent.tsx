import React from "react";
import { Outlet } from "react-router-dom";

const Parent = () => {
  return (
    <>
      <div>Parent</div>
      <Outlet />
    </>
  );
};

export default Parent;
