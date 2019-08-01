import React from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavorite, MdPersonOutline } from 'react-icons/md';

const size = '32px';

const NavBar = () => (
  <Nav>
    <Link to='/'>
      <MdHome size={size} />
    </Link>
    <Link to='/favs'>
      <MdFavorite size={size} />
    </Link>
    <Link to='/user'>
      <MdPersonOutline size={size} />
    </Link>
  </Nav>
);

export default NavBar;
