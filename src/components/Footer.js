import homeData from "../assets/data/homeData";
import TopRightArrow from "../assets/images/top-right-arrow.svg";
import "../styles/Footer.css";

const footer = homeData.footer;
const {
  pages: { logo, pageList },
  explore: { title: exploreTitle, pageList: explorePageList },
  products: { title: productTitle, pageList: productPageList },
  contact: { title: contactTitle, pageList: contactPageList },
} = footer || {};

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-column footer-pages">
          <img src={logo} alt="Logo" className="footer-logo" />
          <ul>
            {pageList.map((item, index) => {
              const { pageName } = item || {};
              return (
                <li key={index} className="footer-list-item">
                  <a href="/">{pageName}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-column footer-explore">
          <h4>{exploreTitle}</h4>
          <ul>
            {explorePageList.map((item, index) => {
              const { pageName } = item || {};
              return (
                <li key={index} className="footer-list-item">
                  <a href="/">
                    {pageName}
                    <img
                      src={TopRightArrow}
                      alt="Arrow"
                      className="footer-arrow-icon"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-column footer-products">
          <h4>{productTitle}</h4>

          <ul>
            {productPageList.map((item, index) => {
              const { pageName } = item || {};
              return (
                <li key={index} className="footer-list-item">
                  <a href="/"> {pageName}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-column footer-contact">
          <h4>{contactTitle}</h4>

          <ul>
            {contactPageList.map((item, index) => {
              const { pageName } = item || {};
              return (
                <li key={index} className="footer-list-item">
                  <a href="/">
                    {pageName}
                    <img
                      src={TopRightArrow}
                      alt="Arrow"
                      className="footer-arrow-icon"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
