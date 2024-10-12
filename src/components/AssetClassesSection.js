import homeData from "../assets/data/homeData";
import "../styles/AssetClasses.css";

const assetClasses = homeData.assetClasses;

const AssetClassesSection = () => {
  return (
    <section className="asset-classes-section">
      <h2>Asset Classes</h2>
      <h4>It’s your money, choose where you invest it</h4>
      <div className="asset-classes-cards">
        {assetClasses.map((asset, index) => (
          <div
            style={{
              backgroundColor: asset.bgColor,
            }}
            className="asset-card"
            key={index}
          >
            <div className="asset-card-blank-content"></div>
            <div className="asset-card-content">
              <div className="asset-logo-container">
                <img
                  src={asset.iconImage}
                  alt={`${asset.title} Logo`}
                  className="asset-logo"
                />
              </div>
              <div className="asset-text">
                <h3>{asset.title}</h3>
                <p className="asset-description">{asset.description}</p>
                <div className="asset-features">
                  <p>
                    Historical returns: <span>{asset.historicalReturns}</span>
                  </p>
                  <p>
                    Risk Level: <span>{asset.riskLevel}</span>
                  </p>
                </div>
              </div>
              <a href="/" className="asset-link">
                {asset.linkText}
                <span>&#8594;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssetClassesSection;
