import logo from "../../Assets/Images/Logo.PNG";
import "./header.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 changeable">
      <div class="container-fluid">
        <a href="" class="navbar-brand">
          <img src={logo} alt="Bootstrap" id="logo"></img>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Features
            </a>
            <a class="nav-link" href="#">
              Pricing
            </a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
