import homeData from "../assets/data/homeData";
import "../styles/Navbar.css";

const { navData } = homeData;

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href={navData.logo.link}>
            <img src={navData.logo.image} alt="Logo" />
          </a>
        </div>

        <div className="nav-links-container">
          <ul className="nav-links">
            {navData.pages.map((page, index) => (
              <li
                key={index}
                className={page.label === "Home" ? "home-link" : ""}
              >
                <a href={page.link}>
                  {page.hasImage ? (
                    <img src={page.image} alt={page.label} />
                  ) : page.hasDropdown ? (
                    <>
                      {page.label}{" "}
                      <span
                        dangerouslySetInnerHTML={{ __html: page.htmlEntity }}
                      />
                    </>
                  ) : (
                    page.label
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
