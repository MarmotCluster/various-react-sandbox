import React from "react";
import { Link } from "react-router-dom";
import router from "../configs/router";

const Navigation = () => {
  return (
    <div className="navigation">
      {router.map((i, index) => {
        return (
          <Link key={index} className="navigation-item" to={i.path}>
            {i.name ? i.name : "</>"}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
