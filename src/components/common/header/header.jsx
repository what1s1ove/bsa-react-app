import { AppPath } from 'common/enums/enums';
import { Link } from 'components/common/common';
import './style.css';

const Header = () => (
  <header className="page-header">
    <div className="page-header__wrapper">
      <h1 className="page-header__title">
        <Link to={AppPath.ROOT}>TODOList</Link>
      </h1>
    </div>
  </header>
);

export default Header;
