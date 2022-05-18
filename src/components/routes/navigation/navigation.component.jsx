import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/crwn-clothing">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/crwn-clothing/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/crwn-clothing/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
