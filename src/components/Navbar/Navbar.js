import "./Navbar.css";
import CustomButton from "../Button/Button.js";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="menu-options">
        <a href="#" className="logo">-BANK.sy</a>
        <span>About</span>
        <span>Blogs</span>
        <span>Contact</span>
      </div>
      <div className="cta">
        <CustomButton name="Login" type="shadow" />
        <CustomButton name="Get Started" type="primary" />
      </div>
    </div>
  );
};

export default Navbar;
