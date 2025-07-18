import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo"/>
        </Link>
        <div>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
