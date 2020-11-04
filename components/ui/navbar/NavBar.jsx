import React from 'react';
import Link from 'next/link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

export const NavBar = ({ sticky, element }) => (
  <nav ref={element} className={sticky ? "nav-bar navbar-sticky" : "nav-bar"}>
    <div className="nav-bar-item">
      <div id="logo">
        <span id="logo-icon">
          <Link href="/"><ChangeHistoryIcon fontSize="large" /></Link>
        </span>
        <span id="product-tagline">Vantage</span>
      </div>
    </div>
    <div className="nav-bar-item">
      <ul id="menu__lg">
        <li>
          <Link href="/ports">Ports</Link>
        </li>
        <li>
          <Link href="/docs">Documentation</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
        <li>
          <ExitToAppIcon />
        </li>
      </ul>
      <div id="menu__sm">
        <MenuIcon />
        <ExitToAppIcon />
      </div>
    </div>
  </nav>
);
