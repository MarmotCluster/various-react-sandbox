import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="navigation-item" to="/">
        Home
      </Link>
      <Link className="navigation-item" to="/usememo">
        useMemo
      </Link>
    </div>
  );
};

export default Navigation;
