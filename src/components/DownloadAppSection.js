import AppImg from "../assets/images/app_icon.svg";
import AppStoreIcon from "../assets/images/app_store_icon.svg";
import GooglePlayIcon from "../assets/images/google_play_icon.svg";
import "../styles/DownloadApp.css";

const DownloadAppSection = () => {
  return (
    <section className="download-app-section">
      <div className="download-app-content">
        <div className="app-details">
          <h5>Download The Rise App</h5>
          <h2>Join our 100,000 users investing and setting long term goals!</h2>
          <p>Dollar investments that help you grow.</p>
          <div className="app-btn">
            <img src={AppStoreIcon} alt="App Store" />

            <img src={GooglePlayIcon} alt="Google Play" />
          </div>
        </div>
        <img src={AppImg} alt="App" />
      </div>
    </section>
  );
};

export default DownloadAppSection;
