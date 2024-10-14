import homeData from "../assets/data/homeData";
import "../styles/AssetClasses.css";
import Container from "./Container";

const {
  assetClassesData: { title, subtitle, assetClasses },
} = homeData;

const AssetClassesSection = () => {
  return (
    <section className="asset-classes-section">
      <Container>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div className="asset-classes-cards">
          {assetClasses.map((asset, index) => {
            const {
              title,
              bgColor,
              description,
              historicalReturns,
              riskLevel,
              link,
              linkText,
              iconImage,
            } = asset;
            return (
              <div
                style={{
                  backgroundColor: bgColor,
                }}
                className="asset-card"
                key={index}
              >
                <div className="asset-card-blank-content"></div>
                <div className="asset-card-content">
                  <div className="asset-logo-container">
                    <img src={iconImage} alt={title} className="asset-logo" />
                  </div>
                  <div className="asset-text">
                    <h3>{title}</h3>
                    <p className="asset-description">{description}</p>
                    <div className="asset-features">
                      <p>
                        Historical returns: <span>{historicalReturns}</span>
                      </p>
                      <p>
                        Risk Level: <span>{riskLevel}</span>
                      </p>
                    </div>
                  </div>
                  <a href={link} className="asset-link">
                    {linkText}
                    <span>&#8594;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AssetClassesSection;
