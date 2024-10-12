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
                  {pageName}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>{exploreTitle}</h4>
          <ul>
            <ul>
              {explorePageList.map((item, index) => {
                const { pageName } = item || {};
                return (
                  <li key={index}>
                    {pageName}
                    <img src={TopRightArrow} alt="Arrow" />
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
        <div>
          <h4>{productTitle}</h4>
          <ul>
            <ul>
              {productPageList.map((item, index) => {
                const { pageName } = item || {};
                return <li key={index}>{pageName}</li>;
              })}
            </ul>
          </ul>
        </div>
        <div>
          <h4>{contactTitle}</h4>
          <ul>
            <ul>
              {contactPageList.map((item, index) => {
                const { pageName } = item || {};
                return (
                  <li key={index}>
                    {pageName}
                    <img src={TopRightArrow} alt="Arrow" />
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
