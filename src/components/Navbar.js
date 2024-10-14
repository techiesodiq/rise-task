import { useState } from "react";
import homeData from "../assets/data/homeData";
import HamburgerIcon from "../assets/images/hamburger.svg";
import "../styles/Navbar.css";
import Container from "./Container";

const {
  navData: {
    logo: { name, image, link },
    pages,
  },
} = homeData || {};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Container>
        <nav className="navbar">
          <div className="logo">
            <a href={link}>
              <img src={image} alt={name} />
            </a>
          </div>

          <div className="hamburger close-button" onClick={toggleMenu}>
            {isMenuOpen ? <div>X</div> : <img src={HamburgerIcon} alt="Menu" />}
          </div>

          <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              {pages.map((page, index) => {
                const {
                  label,
                  link,
                  hasImage,
                  image,
                  hasDropdown,
                  htmlEntity,
                } = page;
                return (
                  <li
                    key={index}
                    className={label === "Home" ? "home-link" : ""}
                  >
                    <a href={link}>
                      {hasImage ? (
                        <img src={image} alt={label} />
                      ) : hasDropdown ? (
                        <>
                          {label}{" "}
                          <span
                            dangerouslySetInnerHTML={{ __html: htmlEntity }}
                          />
                        </>
                      ) : (
                        label
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
