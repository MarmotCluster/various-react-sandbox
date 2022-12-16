<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

interface Menu {
  name: string;
  to: string;
}

const Navigation = () => {
  const menu: Menu[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "useMemo",
      to: "/usememo",
    },
    {
      name: "inputFocus",
      to: "/focus",
    },
    {
      name: "useCnM",
      to: "/usecallback",
    },
    {
      name: "imageSlide",
      to: "/imageslide",
    },
    {
      name: "SVGopoy",
      to: "/opoy",
    },
    {
      name: "DirectMemo",
      to: "/direct",
    },
  ];

  return (
    <div className="navigation">
      {menu.map<JSX.Element>((i: Menu, index: number) => {
        return (
          <Link key={index} className="navigation-item" to={i.to}>
            {i.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
=======
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
>>>>>>> e64fcc2 (feat: :sparkles: tested recoil)
