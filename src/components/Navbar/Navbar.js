import "./Navbar.css";
import CustomButton from "../Button/Button.js";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="menu-options">
        <a href="#" className="logo">
          -BANK.sy
        </a>

        <span>About</span>
        <span>Blogs</span>
        <span>Contact</span>
      </div>

      <div className="cta">
        <CustomButton name="Login" type="shadow" />
        <CustomButton name="Get Started" type="primary" />
      </div>
      <div className="menu">
        <i className="fa fa-bars" onClick={toggleMobileMenu}></i>
        <ul className="mobile-menu">
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Get Started!</li>
        </ul>
      </div>
    </div>
  );
  function toggleMobileMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
  }
};

export default Navbar;
