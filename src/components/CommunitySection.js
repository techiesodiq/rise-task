import homeData from "../assets/data/homeData";
import CommunityImg from "../assets/images/community.svg";
import "../styles/Community.css";
import Container from "./Container";

const {
  communityData: { title, description, link, linkText },
} = homeData;

const CommunitySection = () => {
  return (
    <section className="community-section">
      <Container>
        <div className="community-content">
          <div className="community-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>{linkText}</a>
          </div>
          <img src={CommunityImg} alt="Community" />
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;
