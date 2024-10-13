import homeData from "../assets/data/homeData";
import "../styles/Partners.css";

const { partners } = homeData;

const PartnersSection = () => {
  return (
    <section className="partners-section">
      {partners.map((partner, index) => {
        const { name, logo } = partner;
        return <img key={index} src={logo} alt={name} />;
      })}
    </section>
  );
};

export default PartnersSection;
