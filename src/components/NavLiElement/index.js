// == Import
import './styles.scss';

// == Composant
function NavLiElement({ children }) {
  return (
    <li className="header-nav-list-item">
      {children}
    </li>
  );
}

// == Export
export default NavLiElement;
