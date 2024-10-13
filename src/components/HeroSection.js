import homeData from "../assets/data/homeData";
import "../styles/Hero.css";

const {
  heroData: { title, heroText, description, image, downloadApp },
} = homeData;

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          {heroText}
          <span>.</span>
        </h1>
        <h4>{description}</h4>
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
    </section>
  );
};

export default HeroSection;
