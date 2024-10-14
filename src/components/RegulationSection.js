import homeData from "../assets/data/homeData";
import "../styles/Regulation.css";
import Container from "./Container";

const {
  regulations: { title, description, mobileDescription },
} = homeData;

const RegulationSection = () => {
  return (
    <section className="regulation-section">
      <Container>
        <div className="regulation-text">
          <h2>{title}</h2>
          <p className="desktop-description">{description}</p>
          <p className="mobile-description">{mobileDescription}</p>
        </div>
      </Container>
    </section>
  );
};

export default RegulationSection;
