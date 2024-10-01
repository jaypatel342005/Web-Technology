import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; // Import the custom CSS for styles

const Layout = () => {
  return (
    <>
      <header className="navbar-header p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap" />
              </svg>
            </Link>

            <nav className="navbar navbar-expand-lg">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2 "><Link to="/" className="nav-link text-white animated-link">Home</Link></li>
                <li className="nav-item mx-2"><Link to="/faculty" className="nav-link text-white animated-link">Faculty</Link></li>
                <li className="nav-item mx-2"><Link to="/student" className="nav-link text-white animated-link">Student</Link></li>
                <li className="nav-item mx-2"><Link to="/product" className="nav-link text-white animated-link">Products</Link></li>
                <li className="nav-item mx-2"><Link to="/card" className="nav-link text-white animated-link">Card</Link></li>
                <li className="nav-item mx-2"><Link to="/addfaculty" className="nav-link text-white animated-link">Add Faculty</Link></li>
              </ul>
            </nav>

            <form className="d-flex mb-3 mb-lg-0" role="search">
              <input type="search" className="form-control me-2" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2 animated-button">Login</button>
              <button type="button" className="btn btn-warning animated-button">Sign-up</button>
            </div>
          </div>
        </div>
      </header>

      <main className="container my-4">
        <Outlet />
      </main>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </Link>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Jay Patel</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg></a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram" /></svg></a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook" /></svg></a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
