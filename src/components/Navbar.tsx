import React from 'react'
const githubLogo = require('../img/github-icon.svg');
const mainLogo = require('../img/logo.svg');

type NavbarProps = {
  active: boolean,
  navBarActiveClass: string,
  children: any
};

export const Navbar: React.FC<NavbarProps> = ({ active, navBarActiveClass, children }) => {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
    <img src={githubLogo}></img>
    <h1>aldrin</h1>
    </nav>
  )
}

export default Navbar;

