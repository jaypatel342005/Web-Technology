import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlinkHref="#bootstrap" />
                            </svg>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
                            <li><Link to="/faculty" className="nav-link px-2 text-white">Faculty</Link></li>
                            <li><Link to="/student" className="nav-link px-2 text-white">Student</Link></li>
                            <li><Link to="/product" className="nav-link px-2 text-white">Products</Link></li>
                            <li><Link to="/Card" className="nav-link px-2 text-white">Card</Link></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24">
                            <use xlinkHref="#bootstrap" />
                        </svg>
                    </Link>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
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
}

export default Layout;
