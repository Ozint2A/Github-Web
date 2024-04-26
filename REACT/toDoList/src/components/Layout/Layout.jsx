import React from "react";
import "../../styles/index.css";
function Layout({ children }) {
  return (
    <div className="layout">
      <div className={"container"}>{children}</div>
    </div>
  );
}

export default Layout;
