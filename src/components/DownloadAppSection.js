import homeData from "../assets/data/homeData";
import "../styles/DownloadApp.css";
import Container from "./Container";

const {
  downloadAppData: { title, subtitle, description, image, downloadApp },
} = homeData;

const DownloadAppSection = () => {
  return (
    <section className="download-app-section">
      <Container className="download-app-container">
        <div className="download-app-content">
          <div className="app-details">
            <h5>{title}</h5>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <div className="app-btn">
              {downloadApp.map((item, index) => {
                const { name, icon, link } = item;
                return (
                  <a key={index} href={link}>
                    <img src={icon} alt={name} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="app-image">
            <img src={image} alt="App" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
