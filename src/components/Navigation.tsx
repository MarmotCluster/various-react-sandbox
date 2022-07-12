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
