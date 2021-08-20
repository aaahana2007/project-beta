import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

function WithOrWithOutNav({ location }) {
  // const location = useLocation();
  return <>{location.pathname !== "/trial" && <Nav />}</>;
}

export default WithOrWithOutNav;
