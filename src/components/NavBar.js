import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const NavBar=links.map((link) =>{
    return  <a href={`#${link}`} key={link}>{link}</a>
  })

  return <nav>{renderLinks}</nav>;
}

export default NavBar;
