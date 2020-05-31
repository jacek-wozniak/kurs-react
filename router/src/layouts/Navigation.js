import * as React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
  {name: "start", path: "/", exact: true},
  {name: "produkty", path: "/products"},
  {name: "kontakt", path: "/contact"},
  {name: "panel admina", path: "/admin"},
]

const Navigation = props => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink exact={item.exact ? item.exact : false} to={item.path}>{item.name}</NavLink>
    </li>
  ));

  return (
    <nav className="nav">
      <ul>
        {menu}
      </ul>
    </nav>
  );
};

export default Navigation;