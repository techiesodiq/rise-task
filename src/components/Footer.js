import homeData from "../assets/data/homeData";
import TopRightArrow from "../assets/images/top-right-arrow.svg";
import "../styles/Footer.css";

const {
  footer: { sections },
} = homeData || {};

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        {sections.map((section, index) => {
          const { title, logo, pageList } = section;
          return (
            <div key={index} className="footer-column">
              {logo && <img src={logo} alt="Logo" className="footer-logo" />}

              {title && <h4>{title}</h4>}

              <ul>
                {pageList.map((item) => {
                  const { id, pageName, link } = item;
                  return (
                    <li key={id} className="footer-list-item">
                      <a href={link}>
                        {pageName}
                        {["Explore", "Contact Us"].includes(title) && (
                          <img
                            src={TopRightArrow}
                            alt="Arrow"
                            className="footer-arrow-icon"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
