import { NavLink } from "react-router-dom";
import styles from "../../components/Navbar/Navbar.module.css";

const Navbar = () => {

  return (
     <nav className={`${styles.navbar} p-2 text-bg-dark`}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="logo d-flex"> 
              <h4 className={styles.brand}>Bright Learning</h4>
            </div>
            
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/home" className="nav-link px-2 text-secondary">Home</NavLink></li>
              <li><NavLink to="/features" className="nav-link px-2 text-white">Features</NavLink></li>
              <li><NavLink to="/courses" className="nav-link px-2 text-white">Courses</NavLink></li>
              <li><NavLink to="/faqs" className="nav-link px-2 text-white">FAQs</NavLink></li>
              <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
            </ul>

            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark me-2" placeholder="Search..." aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            <div className={styles.textEnd}>
              <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
              <NavLink to="/signup" className="btn btn-warning">Sign-up</NavLink>

              <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                  <strong>Alexa</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  {/* <li><a className="dropdown-item" href="#">New project...</a></li> */}
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
    </nav>
  ); 
}

export default Navbar;