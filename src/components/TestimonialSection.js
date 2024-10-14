import homeData from "../assets/data/homeData";
import "../styles/Testimonial.css";
import Container from "./Container";

const {
  testimonials: { title, mobileTitle, subtitle, mobileSubtitle, quotations },
} = homeData;

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Container>
        <div className="testimonial-content">
          <div className="testimonial-header">
            <h2 className="desktop-title">{title}</h2>
            <h2 className="mobile-title">{mobileTitle}</h2>
            <p className="desktop-subtitle">{subtitle}</p>
            <p className="mobile-subtitle">{mobileSubtitle}</p>
          </div>

          <div className="testimonial-list">
            {quotations.map((item, index) => {
              const { quote, name, occupation, avatar } = item || {};
              return (
                <div className="testimonial" key={index}>
                  <p>{quote}</p>
                  <div className="testimonial-author">
                    <img src={avatar} alt={name} /> <span>{name}</span>
                    <p className="author-occupation">{occupation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
