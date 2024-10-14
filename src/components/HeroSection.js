import homeData from "../assets/data/homeData";
import "../styles/Hero.css";
import Container from "./Container";

const {
  heroData: {
    title,
    heroText,
    desktopDescription,
    mobileDescription,
    image,
    downloadApp,
  },
} = homeData;

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container className="hero-container">
        <div className="ball big-ball ball-one"></div>
        <div className="ball big-ball ball-two"></div>
        <div className="ball big-ball ball-three"></div>
        <div className="ball small-ball ball-four"></div>
        <div className="ball small-ball ball-five"></div>
        <div className="ball big-ball ball-six"></div>
        <div className="hero-text">
          <h1>
            {heroText}
            <span>.</span>
          </h1>
          <h4 className="desktop-description">{desktopDescription}</h4>
          <h4 className="mobile-description">{mobileDescription}</h4>
          <div className="cta-buttons">
            {downloadApp.map((item, index) => {
              const { name, icon, link } = item;
              return (
                <a key={index} href={link} className="btn">
                  <img src={icon} alt={name} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="hero-image">
          <img src={image} alt={title} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
