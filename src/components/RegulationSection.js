import homeData from "../assets/data/homeData";
import "../styles/Regulation.css";

const {
  regulations: { title, description },
} = homeData;

const RegulationSection = () => {
  return (
    <section className="regulation-section">
      <div className="regulation-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default RegulationSection;
