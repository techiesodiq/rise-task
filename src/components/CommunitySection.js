import CommunityImg from "../assets/images/community.svg";
import "../styles/Community.css";

const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-content">
        <div className="community-text">
          <h2>Join The Rise Community</h2>
          <p>
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. It's completely free and open to
            new and seasoned investors.
          </p>
          <a>Join our Community</a>
        </div>
        <img src={CommunityImg} alt="Community" />
      </div>
    </section>
  );
};

export default CommunitySection;
