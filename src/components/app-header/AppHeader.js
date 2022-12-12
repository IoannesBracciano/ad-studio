import './AppHeader.css';
import React from 'react';

function AppHeader() {
    return (
        <header className="app-header">
        <div className="app-branding">
          <h1 className="app-name">AdStudio</h1>
        </div>
        {/* <nav className="app-nav">
          <ul>
            <li>
              <a href="/">
                Products
              </a>
            </li>
          </ul>
        </nav> */}
      </header>
    );
}

export default AppHeader;
