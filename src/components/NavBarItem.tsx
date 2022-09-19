import { NavLink, NavLinkProps } from 'react-router-dom';
import { AppProps } from '../types';

export default function NavBarItem({ children, ...props }: NavLinkProps) {
  return (
    <li className="nav-item">
      <NavLink {...props} className="nav-link">
        {children}
      </NavLink>
    </li>
  );
}
