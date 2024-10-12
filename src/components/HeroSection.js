import AppStoreIcon from "../assets/images/app_store_icon.svg";
import GooglePlayIcon from "../assets/images/google_play_icon.svg";
import HeroImg from "../assets/images/hero.svg";
import "../styles/Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Dollar investments that help you grow<span>.</span>
        </h1>
        <h4>
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </h4>
        <div className="cta-buttons">
          <a href="/" className="btn">
            <img src={AppStoreIcon} alt="App Store" />
          </a>
          <a href="/" className="btn">
            <img src={GooglePlayIcon} alt="Google Play" />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
