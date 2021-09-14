import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Begin</Link>
      </nav>
    );
  }
}

export default Header;
