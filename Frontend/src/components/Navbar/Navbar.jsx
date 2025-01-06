import { NavLink } from "react-router-dom";
import styles from "../../components/Navbar/Navbar.module.css";

const Navbar = () => {
  return (
     <nav className={`${styles.navbar} p-2 text-bg-dark`}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
              <li><NavLink to="/features" className="nav-link px-2 text-white">Features</NavLink></li>
              <li><NavLink to="/courses" className="nav-link px-2 text-white">Courses</NavLink></li>
              <li><NavLink to="/faqs" className="nav-link px-2 text-white">FAQs</NavLink></li>
              <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
            </ul>

            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark me-2" placeholder="Search..." aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            <div className="text-end">
              <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
              <NavLink to="/signup" className="btn btn-warning">Sign-up</NavLink>
            </div>
          </div>
        </div>
    </nav>
  ); 
}

export default Navbar;