import logo from "../../Assets/Images/Logo.PNG";
import "./header.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 changeable">
      <div className="container-fluid">
        <a href="" class="navbar-brand">
          <img src={logo} id="logo" />
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#" class="nav-link">
              Home
            </a>
            <a href="" class="nav-link">
              About
            </a>
            <a href="" class="nav-link">
              Services
            </a>
            <a href="" class="nav-link">
              Courses
            </a>
            <a href="" class="nav-link">
              Contact
            </a>
            <a href="" class="nav-link">
              Login/SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
