import homeData from "../assets/data/homeData";
import "../styles/Navbar.css";

const {
  navData: {
    logo: { name, image, link },
    pages,
  },
} = homeData || {};

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href={link}>
            <img src={image} alt={name} />
          </a>
        </div>

        <div className="nav-links-container">
          <ul className="nav-links">
            {pages.map((page, index) => {
              const { label, link, hasImage, image, hasDropdown, htmlEntity } =
                page;
              return (
                <li key={index} className={label === "Home" ? "home-link" : ""}>
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
    </header>
  );
};

export default Navbar;
