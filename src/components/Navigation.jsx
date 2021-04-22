import { React } from "react";
import { Link } from "react-router-dom";
import './styles/Navigation.css'

const links = [
  {
    to: '/cursor.edu-hw-react-router/',
    label: 'Home Page'
  },
  {
    to: '/cursor.edu-hw-react-router/posts',
    label: 'Posts Page'
  },
  {
    to: '/cursor.edu-hw-react-router/contacts',
    label: 'Contacts Page'
  },
  {
    to: '/cursor.edu-hw-react-router/photos',
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