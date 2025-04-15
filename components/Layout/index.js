import React from "react";
import Navigation from "../Navigation";

const Layout = ({ children }) => {
  return (
    <div style={{ paddingBottom: "80px" }}>
      <main>{children}</main>
      <Navigation />
    </div>
  );
};
export default Layout;
