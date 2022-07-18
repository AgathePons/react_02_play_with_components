// == Import
import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
function MainRight() {
  return (
    <div className="mainright">
      <div>main, right</div>
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
    </div>
  );
}

// == Export
export default MainRight;
