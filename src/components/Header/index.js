// == Import
import './styles.scss';
import NavLiElement from '../NavLiElement';

// == Composant
function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav-list">
          <NavLiElement>
            <h1 className="header-nav-list-title">
              Titre
            </h1>
          </NavLiElement>
          <NavLiElement>
            Element 1
          </NavLiElement>
          <NavLiElement>
            Element 2
          </NavLiElement>
          <NavLiElement>
            Element 3
          </NavLiElement>
        </ul>
      </nav>
    </header>
  );
}

// == Export
export default Header;
