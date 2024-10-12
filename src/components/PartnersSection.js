import ARMLogo from "../assets/images/arm.svg";
import TechstarsLogo from "../assets/images/techstars.svg";
import VLogo from "../assets/images/v_logo.svg";
import WesternUnionLogo from "../assets/images/western-union.svg";

import "../styles/Partners.css";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <img src={ARMLogo} alt="Partner 1" />
      <img src={WesternUnionLogo} alt="Partner 2" />
      <img src={TechstarsLogo} alt="Partner 3" />
      <img src={VLogo} alt="Partner 4" />
    </section>
  );
};

export default PartnersSection;
