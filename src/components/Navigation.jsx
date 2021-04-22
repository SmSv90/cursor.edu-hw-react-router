import { React } from "react";
import { Link } from "react-router-dom";
import './styles/Navigation.css'

const links = [
  {
    to: '/',
    label: 'Home Page'
  },
  {
    to: '/posts',
    label: 'Posts Page'
  },
  {
    to: '/contacts',
    label: 'Contacts Page'
  },
  {
    to: '/photos',
    label: 'Photos Page'
  }
];

export const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__menu">
      {links.map(link => (
        <li key={link.to}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)