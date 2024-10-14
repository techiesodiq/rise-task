import homeData from "../assets/data/homeData";
import "../styles/Partners.css";
import Container from "./Container";

const { partners } = homeData;

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <Container className="partners-container">
        <p className="support-text">We are supported by</p>
        <div className="logos-container">
          {partners.map((partner, index) => {
            const { name, logo } = partner;
            return <img key={index} src={logo} alt={name} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;
