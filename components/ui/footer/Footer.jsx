import React from 'react';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import Link from 'next/link';

export const Footer = () => (
  <div id="footer-container">
    <div id="logo">
      <span id="logo-icon">
        <Link href="/">
          <ChangeHistoryIcon fontSize="large" />
        </Link>
      </span>
      <span id="product-tagline">Vantage</span>
    </div>
    <span>© 2020 Phong Tran</span>
  </div>
);
