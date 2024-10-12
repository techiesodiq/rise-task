import HomeImg from "../assets/images/home.svg";
import Logo from "../assets/images/logo.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li className="home-link">
              <a href="/">
                <img src={HomeImg} alt="Home" />{" "}
              </a>
            </li>
            <li>
              <a href="/">Products &#8595; </a>
            </li>
            <li>
              <a href="/src">Investment Club</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
