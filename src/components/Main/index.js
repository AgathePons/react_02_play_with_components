// == Import
import LeftSide from '../LeftSide';
import MainLeft from '../MainLeft';
import MainRight from '../MainRight';
import './styles.scss';

// == Composant
function Main() {
  return (
    <main className="main">
      <LeftSide />
      <MainLeft />
      <MainRight />
    </main>
  );
}

// == Export
export default Main;
