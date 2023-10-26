import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="navbar navbar-expand-lg bg-primary ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav justify-content-center">
            <li>
              <NavLink to="/" className=" nav-link active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
