import {Link} from "react-router-dom";
import logo from '../../images/logo.jpeg';

import './index.css';

const Header = () => {
  return (
    <div className="header">
      <Link className="header__link header__home" to="/">
        <img className="header__logo" src={logo}></img>
      </Link>
      <nav className="header__navigations">
        <Link className="header__link header__register" to="/register">register</Link>
        <Link className="header__link header__login" to="/login">login</Link>
      </nav>
    </div>
  );
};

export default Header;