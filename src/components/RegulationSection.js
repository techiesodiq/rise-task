import homeData from "../assets/data/homeData";
import "../styles/Regulation.css";
import Container from "./Container";

const {
  regulations: { title, description },
} = homeData;

const RegulationSection = () => {
  return (
    <section className="regulation-section">
      <Container>
        <div className="regulation-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Container>
    </section>
  );
};

export default RegulationSection;
