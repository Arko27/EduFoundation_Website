import logo from "../../Assets/Images/Logo.PNG";
import "./header.css";

const arr = [
  { option: "Home" },
  { option: "About" },
  { option: "Services" },
  { option: "Courses" },
  { option: "Contact" },
  { option: "Login/SignUp" },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 changeable">
      <div className="container-fluid">
        <a href="" className="navbar-brand">
          <img src={logo} id="logo" />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {arr.map((i) => (
              <a href="#" className="nav-link">
                {i.option}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
